package ie.printnpack.agent

import android.widget.Toast
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.imePadding
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.statusBarsPadding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

private val Ink = Color(0xFF0F172A)
private val Blue = Color(0xFF2563EB)
private val Mist = Color(0xFFF8FAFC)

@Composable
fun AgentApp() {
    val context = LocalContext.current
    val api = remember { AgentApi(context) }
    var signedIn by remember { mutableStateOf(api.token().isNotBlank()) }
    var openChat by remember { mutableStateOf<String?>(null) }

    MaterialTheme {
        Surface(modifier = Modifier.fillMaxSize(), color = Mist) {
            when {
                !signedIn -> LoginScreen(api) { signedIn = true }
                openChat == null -> InboxScreen(
                    api = api,
                    onOpen = { openChat = it },
                    onSignOut = {
                        api.clear()
                        signedIn = false
                    },
                )
                else -> ThreadScreen(
                    api = api,
                    chatId = openChat!!,
                    onBack = { openChat = null },
                    onSignedOut = {
                        api.clear()
                        signedIn = false
                        openChat = null
                    },
                )
            }
        }
    }
}

@Composable
private fun LoginScreen(api: AgentApi, onReady: () -> Unit) {
    val scope = rememberCoroutineScope()
    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var busy by remember { mutableStateOf(false) }
    var error by remember { mutableStateOf("") }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .statusBarsPadding()
            .padding(24.dp),
        verticalArrangement = Arrangement.Center,
    ) {
        Text("PrintNPack", fontSize = 28.sp, fontWeight = FontWeight.Bold, color = Ink)
        Text("Live chats", color = Color(0xFF64748B))
        Spacer(Modifier.height(24.dp))
        OutlinedTextField(
            value = email,
            onValueChange = { email = it },
            label = { Text("Admin email") },
            modifier = Modifier.fillMaxWidth(),
            singleLine = true,
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Email),
        )
        Spacer(Modifier.height(12.dp))
        OutlinedTextField(
            value = password,
            onValueChange = { password = it },
            label = { Text("Password") },
            modifier = Modifier.fillMaxWidth(),
            singleLine = true,
            visualTransformation = PasswordVisualTransformation(),
        )
        if (error.isNotBlank()) {
            Spacer(Modifier.height(8.dp))
            Text(error, color = Color(0xFFDC2626), fontSize = 13.sp)
        }
        Spacer(Modifier.height(16.dp))
        Button(
            onClick = {
                busy = true
                error = ""
                scope.launch {
                    try {
                        withContext(Dispatchers.IO) { api.login(email.trim(), password) }
                        onReady()
                    } catch (err: Exception) {
                        error = err.message ?: "Sign-in failed"
                    } finally {
                        busy = false
                    }
                }
            },
            enabled = !busy && email.isNotBlank() && password.isNotBlank(),
            modifier = Modifier.fillMaxWidth(),
        ) {
            Text(if (busy) "Signing in…" else "Sign in")
        }
    }
}

@Composable
private fun InboxScreen(api: AgentApi, onOpen: (String) -> Unit, onSignOut: () -> Unit) {
    var chats by remember { mutableStateOf<List<ChatSummary>>(emptyList()) }
    var error by remember { mutableStateOf("") }

    LaunchedEffect(Unit) {
        while (true) {
            try {
                chats = withContext(Dispatchers.IO) { api.chats() }
                error = ""
            } catch (err: Exception) {
                if (err.message == "signed-out") {
                    onSignOut()
                    return@LaunchedEffect
                }
                error = err.message ?: "Could not load chats"
            }
            delay(3000)
        }
    }

    Column(Modifier.fillMaxSize().statusBarsPadding()) {
        Row(
            Modifier.fillMaxWidth().padding(horizontal = 16.dp, vertical = 12.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
        ) {
            Text("Live chats", fontSize = 22.sp, fontWeight = FontWeight.Bold, color = Ink)
            TextButton(onClick = onSignOut) { Text("Sign out") }
        }
        if (error.isNotBlank()) Text(error, color = Color(0xFFDC2626), modifier = Modifier.padding(horizontal = 16.dp))
        if (chats.isEmpty() && error.isBlank()) {
            Text("No website chats yet.", modifier = Modifier.padding(16.dp), color = Color(0xFF64748B))
        }
        LazyColumn(Modifier.fillMaxSize()) {
            items(chats, key = { it.id }) { chat ->
                Column(
                    Modifier
                        .fillMaxWidth()
                        .clickable { onOpen(chat.id) }
                        .padding(horizontal = 16.dp, vertical = 12.dp)
                ) {
                    Text(
                        if (chat.status == "human") "You have this" else "Assistant",
                        fontSize = 12.sp,
                        color = if (chat.status == "human") Color(0xFF047857) else Color(0xFF64748B),
                    )
                    Text(chat.visitorEmail.ifBlank { chat.page.ifBlank { "Website visitor" } }, fontWeight = FontWeight.SemiBold)
                    Text(chat.preview, maxLines = 2, color = Color(0xFF475569), fontSize = 13.sp)
                }
            }
        }
    }
}

@Composable
private fun ThreadScreen(api: AgentApi, chatId: String, onBack: () -> Unit, onSignedOut: () -> Unit) {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()
    var thread by remember { mutableStateOf<ChatThread?>(null) }
    var draft by remember { mutableStateOf("") }
    var busy by remember { mutableStateOf(false) }

    LaunchedEffect(chatId) {
        while (true) {
            try {
                thread = withContext(Dispatchers.IO) { api.thread(chatId) }
            } catch (err: Exception) {
                if (err.message == "signed-out") {
                    onSignedOut()
                    return@LaunchedEffect
                }
            }
            delay(2000)
        }
    }

    fun send(action: String, text: String = "") {
        busy = true
        scope.launch {
            try {
                withContext(Dispatchers.IO) { api.act(chatId, action, text) }
                if (action == "reply") draft = ""
                thread = withContext(Dispatchers.IO) { api.thread(chatId) }
            } catch (err: Exception) {
                Toast.makeText(context, err.message ?: "Could not update the chat", Toast.LENGTH_SHORT).show()
            } finally {
                busy = false
            }
        }
    }

    Column(Modifier.fillMaxSize().statusBarsPadding().imePadding()) {
        Row(Modifier.fillMaxWidth().padding(8.dp), horizontalArrangement = Arrangement.SpaceBetween) {
            TextButton(onClick = onBack) { Text("Back") }
            val status = thread?.status
            if (status == "human") {
                TextButton(onClick = { send("release") }, enabled = !busy) { Text("Hand back") }
            } else {
                TextButton(onClick = { send("takeover") }, enabled = !busy) { Text("Take over") }
            }
        }
        Text(
            thread?.visitorEmail?.ifBlank { null } ?: "Website visitor",
            modifier = Modifier.padding(horizontal = 16.dp),
            fontWeight = FontWeight.Bold,
            color = Ink,
        )
        Text(thread?.page.orEmpty(), modifier = Modifier.padding(horizontal = 16.dp), color = Color(0xFF64748B), fontSize = 12.sp)
        LazyColumn(Modifier.weight(1f).padding(12.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
            items(thread?.messages.orEmpty(), key = { it.id }) { message ->
                val mine = message.role == "staff"
                val fromVisitor = message.role == "user"
                Text(
                    message.content,
                    modifier = Modifier
                        .fillMaxWidth()
                        .background(
                            when {
                                fromVisitor -> Blue
                                mine -> Color(0xFFD1FAE5)
                                else -> Color.White
                            },
                            RoundedCornerShape(16.dp),
                        )
                        .padding(12.dp),
                    color = if (fromVisitor) Color.White else Ink,
                )
            }
        }
        Row(Modifier.fillMaxWidth().padding(12.dp), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            OutlinedTextField(
                value = draft,
                onValueChange = { draft = it },
                modifier = Modifier.weight(1f),
                placeholder = { Text("Reply as the team") },
            )
            Button(
                onClick = { send("reply", draft.trim()) },
                enabled = !busy && draft.isNotBlank(),
            ) { Text("Send") }
        }
    }
}

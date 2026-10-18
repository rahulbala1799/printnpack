package ie.printnpack.agent

import android.content.Context
import ie.printnpack.agent.BuildConfig
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import org.json.JSONArray
import org.json.JSONObject
import java.util.concurrent.TimeUnit

data class ChatSummary(
    val id: String,
    val page: String,
    val status: String,
    val visitorEmail: String,
    val preview: String,
    val lastMessageAt: String,
)

data class ChatMessage(
    val id: String,
    val role: String,
    val content: String,
    val createdAt: String,
)

data class ChatThread(
    val id: String,
    val page: String,
    val status: String,
    val visitorEmail: String,
    val messages: List<ChatMessage>,
)

class AgentApi(context: Context) {
    private val prefs = context.getSharedPreferences("printnpack-agent", Context.MODE_PRIVATE)
    private val http = OkHttpClient.Builder()
        .callTimeout(30, TimeUnit.SECONDS)
        .build()
    private val jsonType = "application/json".toMediaType()

    fun token(): String = prefs.getString("token", "") ?: ""

    fun saveToken(token: String) {
        prefs.edit().putString("token", token).apply()
    }

    fun clear() {
        prefs.edit().clear().apply()
    }

    fun login(email: String, password: String): String {
        val body = JSONObject()
            .put("email", email)
            .put("password", password)
            .toString()
            .toRequestBody(jsonType)
        val request = Request.Builder()
            .url("${BuildConfig.API_BASE_URL}/api/auth/login")
            .header("X-Client", "printnpack-agent")
            .post(body)
            .build()
        http.newCall(request).execute().use { response ->
            val payload = JSONObject(response.body?.string().orEmpty())
            if (!response.isSuccessful) {
                throw IllegalStateException(payload.optString("error", "Sign-in failed"))
            }
            val token = payload.optString("token")
            if (token.isBlank()) throw IllegalStateException("Sign-in did not return a session")
            saveToken(token)
            return token
        }
    }

    fun chats(): List<ChatSummary> {
        val payload = get("/api/staff/chats")
        val rows = payload.optJSONArray("chats") ?: JSONArray()
        return buildList {
            for (index in 0 until rows.length()) {
                val row = rows.getJSONObject(index)
                add(
                    ChatSummary(
                        id = row.optString("id"),
                        page = row.optString("page"),
                        status = row.optString("status"),
                        visitorEmail = row.optString("visitorEmail"),
                        preview = row.optString("preview"),
                        lastMessageAt = row.optString("lastMessageAt"),
                    )
                )
            }
        }
    }

    fun thread(id: String): ChatThread {
        val payload = get("/api/staff/chats/$id")
        val chat = payload.getJSONObject("chat")
        val rows = payload.optJSONArray("messages") ?: JSONArray()
        val messages = buildList {
            for (index in 0 until rows.length()) {
                val row = rows.getJSONObject(index)
                add(
                    ChatMessage(
                        id = row.optString("id"),
                        role = row.optString("role"),
                        content = row.optString("content"),
                        createdAt = row.optString("createdAt"),
                    )
                )
            }
        }
        return ChatThread(
            id = chat.optString("id"),
            page = chat.optString("page"),
            status = chat.optString("status"),
            visitorEmail = chat.optString("visitorEmail"),
            messages = messages,
        )
    }

    fun act(id: String, action: String, text: String = "") {
        val body = JSONObject().put("action", action).put("text", text).toString().toRequestBody(jsonType)
        val request = Request.Builder()
            .url("${BuildConfig.API_BASE_URL}/api/staff/chats/$id")
            .header("Authorization", "Bearer ${token()}")
            .post(body)
            .build()
        http.newCall(request).execute().use { response ->
            if (!response.isSuccessful) {
                val payload = JSONObject(response.body?.string().orEmpty().ifBlank { "{}" })
                throw IllegalStateException(payload.optString("error", "Could not update the chat"))
            }
        }
    }

    private fun get(path: String): JSONObject {
        val request = Request.Builder()
            .url("${BuildConfig.API_BASE_URL}$path")
            .header("Authorization", "Bearer ${token()}")
            .get()
            .build()
        http.newCall(request).execute().use { response ->
            val raw = response.body?.string().orEmpty()
            if (response.code == 401) throw IllegalStateException("signed-out")
            if (!response.isSuccessful) throw IllegalStateException("Could not load chats")
            return JSONObject(raw.ifBlank { "{}" })
        }
    }
}

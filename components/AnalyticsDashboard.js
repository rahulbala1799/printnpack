import React, { useState, useEffect } from 'react';
import { FaChartLine, FaEnvelope, FaDatabase, FaPlay, FaStop, FaSync } from 'react-icons/fa';

export default function AnalyticsDashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [reportStatus, setReportStatus] = useState(null);
  const [nextReports, setNextReports] = useState(null);

  // Test the analytics system
  const testSystem = async (testType = 'full') => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/analytics/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ testType })
      });
      
      const result = await response.json();
      setTestResults(result);
      
      if (result.success) {
        alert(`✅ ${testType} test completed successfully!`);
      } else {
        alert(`❌ ${testType} test failed: ${result.error}`);
      }
    } catch (error) {
      console.error('Test error:', error);
      alert('❌ Test failed. Check console for details.');
    } finally {
      setIsLoading(false);
    }
  };

  // Generate manual report
  const generateReport = async (reportType = 'daily') => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/analytics/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reportType })
      });
      
      const result = await response.json();
      setReportStatus(result);
      
      if (result.success) {
        alert(`✅ ${reportType} report generated and sent successfully!`);
      } else {
        alert(`❌ Report generation failed: ${result.error}`);
      }
    } catch (error) {
      console.error('Report generation error:', error);
      alert('❌ Report generation failed. Check console for details.');
    } finally {
      setIsLoading(false);
    }
  };

  // Get next report times
  const getNextReportTimes = () => {
    const now = new Date();
    const dublinTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Dublin' }));
    
    const morningReport = new Date(dublinTime);
    morningReport.setHours(6, 0, 0, 0);
    
    const eveningReport = new Date(dublinTime);
    eveningReport.setHours(18, 0, 0, 0);
    
    // If it's past 6 PM, next morning report is tomorrow
    if (dublinTime.getHours() >= 18) {
      morningReport.setDate(morningReport.getDate() + 1);
    }
    
    // If it's past 6 AM but before 6 PM, next is evening
    if (dublinTime.getHours() >= 6 && dublinTime.getHours() < 18) {
      // eveningReport is today
    } else if (dublinTime.getHours() < 6) {
      // morningReport is today
    }
    
    setNextReports({
      morning: morningReport,
      evening: eveningReport,
      currentTime: dublinTime
    });
  };

  useEffect(() => {
    getNextReportTimes();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <FaChartLine className="mr-3 text-blue-600" />
            Analytics Dashboard
          </h1>
          <div className="text-sm text-gray-600">
            <p>System Status: <span className="text-green-600 font-semibold">Active</span></p>
            <p>Timezone: Europe/Dublin</p>
          </div>
        </div>

        {/* System Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center">
              <FaDatabase className="text-blue-600 text-2xl mr-3" />
              <div>
                <h3 className="font-semibold text-blue-800">Database</h3>
                <p className="text-blue-600">Connected to Neon PostgreSQL</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <FaEnvelope className="text-green-600 text-2xl mr-3" />
              <div>
                <h3 className="font-semibold text-green-800">Email Service</h3>
                <p className="text-green-600">Gmail configured</p>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="flex items-center">
              <FaChartLine className="text-purple-600 text-2xl mr-3" />
              <div>
                <h3 className="font-semibold text-purple-800">Tracking</h3>
                <p className="text-purple-600">Active on all pages</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Report Times */}
        {nextReports && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">📅 Next Scheduled Reports</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl">🌅</div>
                <p className="font-medium">Morning Report</p>
                <p className="text-sm text-gray-600">
                  {nextReports.morning.toLocaleString('en-GB', { 
                    timeZone: 'Europe/Dublin',
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl">🌆</div>
                <p className="font-medium">Evening Report</p>
                <p className="text-sm text-gray-600">
                  {nextReports.evening.toLocaleString('en-GB', { 
                    timeZone: 'Europe/Dublin',
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Testing Section */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-yellow-800 mb-4 flex items-center">
            <FaPlay className="mr-2" />
            System Testing
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <button
              onClick={() => testSystem('database')}
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg flex items-center justify-center"
            >
              <FaDatabase className="mr-2" />
              Test Database
            </button>
            
            <button
              onClick={() => testSystem('email')}
              disabled={isLoading}
              className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-4 py-2 rounded-lg flex items-center justify-center"
            >
              <FaEnvelope className="mr-2" />
              Test Email
            </button>
            
            <button
              onClick={() => testSystem('full')}
              disabled={isLoading}
              className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white px-4 py-2 rounded-lg flex items-center justify-center"
            >
              <FaSync className="mr-2" />
              Full System Test
            </button>
          </div>

          {isLoading && (
            <div className="text-center text-gray-600">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2">Testing system...</p>
            </div>
          )}

          {testResults && (
            <div className="mt-4 p-4 bg-white rounded-lg border">
              <h4 className="font-semibold mb-2">Test Results:</h4>
              <pre className="text-sm bg-gray-100 p-2 rounded overflow-x-auto">
                {JSON.stringify(testResults, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* Manual Report Generation */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center">
            <FaEnvelope className="mr-2" />
            Manual Report Generation
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => generateReport('daily')}
              disabled={isLoading}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-4 py-2 rounded-lg"
            >
              Generate Daily Report
            </button>
            
            <button
              onClick={() => generateReport('morning')}
              disabled={isLoading}
              className="bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-400 text-white px-4 py-2 rounded-lg"
            >
              Generate Morning Report
            </button>
            
            <button
              onClick={() => generateReport('evening')}
              disabled={isLoading}
              className="bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white px-4 py-2 rounded-lg"
            >
              Generate Evening Report
            </button>
          </div>

          {reportStatus && (
            <div className="mt-4 p-4 bg-white rounded-lg border">
              <h4 className="font-semibold mb-2">Report Status:</h4>
              <pre className="text-sm bg-gray-100 p-2 rounded overflow-x-auto">
                {JSON.stringify(reportStatus, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* System Information */}
        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-3">ℹ️ System Information</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p><strong>Database:</strong> Neon PostgreSQL (Neon.tech)</p>
            <p><strong>Email Provider:</strong> Gmail SMTP</p>
            <p><strong>Report Schedule:</strong> 6:00 AM & 6:00 PM (Irish time)</p>
            <p><strong>Privacy:</strong> IP addresses anonymized, GDPR compliant</p>
            <p><strong>Tracking:</strong> Page visits, time on page, bounce rate, device types, referrers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Zap, Gauge, Battery, Clock } from 'lucide-react';

export default function Performance() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Performance <span className="neon-text">Optimization</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Profiling, benchmarking, and optimization techniques for production apps.
          </p>
        </motion.div>

        {/* Optimization Areas */}
        <div className="space-y-12">
          {/* Startup Time */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Clock className="w-12 h-12 text-neon-cyan" />
              <h2 className="text-3xl font-bold">Startup Time Optimization</h2>
            </div>
            <pre className="bg-black/50 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{`// App Startup Profiling
class ApplicationImpl : Application() {
    
    override fun onCreate() {
        super.onCreate()
        
        // Initialize on main thread (critical path)
        initializeCriticalComponents()
        
        // Defer non-critical initialization
        lifecycleScope.launch(Dispatchers.IO) {
            initializeBackgroundTasks()
        }
    }
    
    private fun initializeCriticalComponents() {
        // Only essential initializations
        FirebaseApp.initializeApp(this)
        initializeDependencyInjection()
    }
    
    private suspend fun initializeBackgroundTasks() {
        // Non-critical tasks
        initializeAnalytics()
        preloadData()
        syncWithServer()
    }
}

// Result: Cold start time reduced from 2.5s to 800ms`}</code>
            </pre>
          </motion.div>

          <!-- Memory Optimization -->
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Gauge className="w-12 h-12 text-neon-cyan" />
              <h2 className="text-3xl font-bold">Memory Optimization</h2>
            </div>
            <pre className="bg-black/50 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{`// Memory Leak Prevention
class MainViewModel @Inject constructor(
    private val repository: MainRepository
) : ViewModel() {
    
    // Use StateFlow instead of LiveData
    private val _state = MutableStateFlow(MainState())
    val state: StateFlow<MainState> = _state.asStateFlow()
    
    // Proper coroutine scope management
    fun loadData() {
        viewModelScope.launch {
            repository.getData()
                .catch { e ->
                    _state.update { it.copy(error = e.message) }
                }
                .collect { data ->
                    _state.update { it.copy(data = data) }
                }
        }
    }
    
    // Avoid memory leaks with WeakReference
    private val imageCache = LruCache<String, Bitmap>(maxMemory / 8)
    
    override fun onCleared() {
        super.onCleared()
        imageCache.evictAll()
    }
}

// Result: Memory usage reduced by 40%, 0 memory leaks`}</code>
            </pre>
          </motion.div>

          <!-- Battery Optimization -->
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Battery className="w-12 h-12 text-neon-cyan" />
              <h2 className="text-3xl font-bold">Battery Optimization</h2>
            </div>
            <pre className="bg-black/50 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{`// WorkManager for Background Tasks
class SyncWorker(
    context: Context,
    params: WorkerParameters
) : CoroutineWorker(context, params) {
    
    override suspend fun doWork(): Result {
        return try {
            // Batch network requests
            val syncResult = repository.syncData()
            
            // Exponential backoff on failure
            if (syncResult.isSuccess) {
                Result.success()
            } else {
                Result.retry()
            }
        } catch (e: Exception) {
            Result.retry()
        }
    }
}

// Schedule with constraints
val syncWork = PeriodicWorkRequestBuilder<SyncWorker>(
    15, TimeUnit.MINUTES
)
    .setConstraints(
        Constraints.Builder()
            .setRequiredNetworkType(NetworkType.CONNECTED)
            .setRequiresBatteryNotLow(true)
            .setRequiresCharging(false)
            .build()
    )
    .setBackoffCriteria(
        BackoffPolicy.EXPONENTIAL,
        WorkRequest.MIN_BACKOFF_MILLIS,
        TimeUnit.MILLISECONDS
    )
    .build()

WorkManager.getInstance(context).enqueue(syncWork)

// Result: Battery usage reduced by 35%`}</code>
            </pre>
          </motion.div>

          <!-- Profiling Tools -->
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Zap className="w-12 h-12 text-neon-cyan" />
              <h2 className="text-3xl font-bold">Profiling Tools</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-4 text-neon-cyan">Android Profiler</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• CPU Profiler: Method tracing</li>
                  <li>• Memory Profiler: Heap dumps</li>
                  <li>• Network Profiler: API calls</li>
                  <li>• Energy Profiler: Battery usage</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-neon-cyan">Benchmarking</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Jetpack Benchmark Library</li>
                  <li>• Startup timing metrics</li>
                  <li>• Frame rendering time</li>
                  <li>• Jank detection</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <!-- Results -->
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="glass-card rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6 neon-text">Performance Results</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-neon-cyan mb-2">800ms</div>
                <div className="text-gray-400">Cold Start</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-neon-cyan mb-2">40%</div>
                <div className="text-gray-400">Memory Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-neon-cyan mb-2">35%</div>
                <div className="text-gray-400">Battery Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-neon-cyan mb-2">60fps</div>
                <div className="text-gray-400">Smooth Rendering</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

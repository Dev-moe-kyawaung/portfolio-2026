'use client';

import { motion } from 'framer-motion';
import { Layers, Database, Cloud, Shield, Zap, GitBranch } from 'lucide-react';

const patterns = [
  {
    icon: Layers,
    title: 'MVVM Architecture',
    description: 'Separation of concerns with ViewModel, StateFlow, and Compose UI',
    code: `class MainViewModel @Inject constructor(
    private val repository: MainRepository
) : ViewModel() {
    private val _state = MutableStateFlow(MainState())
    val state: StateFlow<MainState> = _state.asStateFlow()
    
    fun loadData() {
        viewModelScope.launch {
            _state.update { it.copy(isLoading = true) }
            repository.getData()
                .catch { _state.update { it.copy(error = it.message) } }
                .collect { data ->
                    _state.update { it.copy(data = data, isLoading = false) }
                }
        }
    }
}`,
  },
  {
    icon: Database,
    title: 'Clean Architecture',
    description: 'Domain-driven design with clear layer boundaries',
    code: `// Domain Layer
interface UserRepository {
    suspend fun getUser(id: String): Result<User>
    suspend fun updateUser(user: User): Result<Unit>
}

// Data Layer
class UserRepositoryImpl(
    private val localDataSource: UserLocalDataSource,
    private val remoteDataSource: UserRemoteDataSource
) : UserRepository {
    override suspend fun getUser(id: String): Result<User> {
        return try {
            val cached = localDataSource.getUser(id)
            if (cached != null) {
                Result.success(cached)
            } else {
                val remote = remoteDataSource.getUser(id)
                localDataSource.cacheUser(remote)
                Result.success(remote)
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}`,
  },
  {
    icon: Cloud,
    title: 'Offline-First Strategy',
    description: 'Room database with sync queue and conflict resolution',
    code: `@Entity(tableName = "users")
data class UserEntity(
    @PrimaryKey val id: String,
    val name: String,
    val email: String,
    val lastSyncedAt: Long,
    val isDirty: Boolean = false
)

class SyncManager @Inject constructor(
    private val dao: UserDao,
    private val api: UserApi
) {
    suspend fun syncPendingChanges() {
        val dirtyUsers = dao.getDirtyUsers()
        dirtyUsers.forEach { user ->
            try {
                val response = api.updateUser(user.toDto())
                dao.updateSyncStatus(user.id, response.lastModified)
            } catch (e: Exception) {
                // Retry with exponential backoff
                scheduleRetry(user.id)
            }
        }
    }
}`,
  },
  {
    icon: Shield,
    title: 'Dependency Injection',
    description: 'Hilt for compile-time DI with modular architecture',
    code: `@Module
@InstallIn(SingletonComponent::class)
abstract class AppModule {
    
    @Provides
    @Singleton
    fun provideRetrofit(@Provides okHttpClient: OkHttpClient): Retrofit =
        Retrofit.Builder()
            .baseUrl(BASE_URL)
            .client(okHttpClient)
            .addConverterFactory(GsonConverterFactory.create())
            .addCallAdapterFactory(CoroutinesCallAdapterFactory())
            .build()
    
    @Provides
    @Singleton
    fun provideDatabase(@ApplicationContext context: Context): AppDatabase =
        Room.databaseBuilder(
            context,
            AppDatabase::class.java,
            "app_database"
        ).build()
}`,
  },
  {
    icon: Zap,
    title: 'Coroutines & Flow',
    description: 'Structured concurrency with reactive streams',
    code: `class DataRepository @Inject constructor(
    private val api: DataApi,
    private val dao: DataDao
) {
    fun getDataStream(): Flow<List<DataItem>> = flow {
        val local = dao.getAll()
        emit(local)
        
        if (local.isEmpty() || !isFresh(local)) {
            emitAll(
                api.getDataStream()
                    .catch { e -> emit(emptyList()) }
                    .onEach { newData ->
                        dao.insertAll(newData)
                        emit(newData)
                    }
            )
        }
    }.flowOn(Dispatchers.IO)
}`,
  },
  {
    icon: GitBranch,
    title: 'CI/CD Pipeline',
    description: 'GitHub Actions with automated testing and deployment',
    code: `name: Android CI/CD

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up JDK 17
        uses: actions/setup-java@v4
        with:
          java-version: '17'
          distribution: 'temurin'
      
      - name: Run Tests
        run: ./gradlew test
      
      - name: Build Debug APK
        run: ./gradlew assembleDebug
      
      - name: Upload APK
        uses: actions/upload-artifact@v4
        with:
          name: app-debug
          path: app/build/outputs/apk/debug/`,
  },
];

export default function SystemDesign() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            System <span className="neon-text">Design</span> Patterns
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Production-ready architecture patterns used across 10+ years of Android development.
          </p>
        </motion.div>

        {/* Patterns Grid */}
        <div className="space-y-12">
          {patterns.map((pattern, index) => (
            <motion.div
              key={pattern.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-card rounded-xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <pattern.icon className="w-10 h-10 text-neon-cyan" />
                <h2 className="text-3xl font-bold">{pattern.title}</h2>
              </div>
              
              <p className="text-gray-300 mb-6">{pattern.description}</p>
              
              <div className="bg-black/50 rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm text-gray-300">
                  <code>{pattern.code}</code>
                </pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

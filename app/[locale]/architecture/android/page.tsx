'use client';

import { motion } from 'framer-motion';
import { Layers, Box, GitBranch, Shield } from 'lucide-react';

export default function AndroidArchitecture() {
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
            Android <span className="neon-text">Architecture</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Production-ready architecture patterns used in apps serving millions of users.
          </p>
        </motion.div>

        {/* Architecture Patterns */}
        <div className="space-y-12">
          {/* MVVM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Layers className="w-12 h-12 text-neon-cyan" />
              <h2 className="text-3xl font-bold">MVVM Architecture</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Model-View-ViewModel pattern with StateFlow for reactive UI updates.
            </p>
            <pre className="bg-black/50 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{`class MainViewModel @Inject constructor(
    private val repository: MainRepository
) : ViewModel() {
    private val _state = MutableStateFlow(MainState())
    val state: StateFlow<MainState> = _state.asStateFlow()
    
    fun loadData() {
        viewModelScope.launch {
            repository.getData()
                .catch { e -> _state.update { it.copy(error = e.message) } }
                .collect { data ->
                    _state.update { it.copy(data = data) }
                }
        }
    }
}`}</code>
            </pre>
          </motion.div>

          {/* Clean Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Box className="w-12 h-12 text-neon-cyan" />
              <h2 className="text-3xl font-bold">Clean Architecture</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Three-layer architecture with clear separation of concerns.
            </p>
            <pre className="bg-black/50 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{`┌─────────────────────────────────────┐
│     Presentation Layer (UI)         │
│  • Jetpack Compose Screens          │
│  • ViewModel (StateFlow)            │
│  • Navigation Component             │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│       Domain Layer (Business)       │
│  • Use Cases / Interactors          │
│  • Repository Interfaces            │
│  • Domain Models                    │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│        Data Layer (Repository)      │
│  • Repository Implementations       │
│  • Local Data Source (Room)         │
│  • Remote Data Source (Retrofit)    │
│  • Firebase Integration             │
└─────────────────────────────────────┘`}</code>
            </pre>
          </motion.div>

          {/* Multi-Module */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <GitBranch className="w-12 h-12 text-neon-cyan" />
              <h2 className="text-3xl font-bold">Multi-Module Architecture</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Modular project structure for better scalability and team collaboration.
            </p>
            <pre className="bg-black/50 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{`app/
├── :app (main application)
├── :core (common utilities, base classes)
├── :feature-home (home screen module)
├── :feature-profile (profile module)
├── :data (repository implementations)
├── :domain (business logic, use cases)
└── :navigation (navigation graph)`}</code>
            </pre>
          </motion.div>

          {/* Dependency Injection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-12 h-12 text-neon-cyan" />
              <h2 className="text-3xl font-bold">Hilt Dependency Injection</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Compile-time DI with Hilt for clean, testable code.
            </p>
            <pre className="bg-black/50 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{`@Module
@InstallIn(SingletonComponent::class)
abstract class AppModule {
    
    @Provides
    @Singleton
    fun provideRetrofit(@Provides okHttpClient: OkHttpClient): Retrofit =
        Retrofit.Builder()
            .baseUrl(BASE_URL)
            .client(okHttpClient)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
    
    @Provides
    @Singleton
    fun provideDatabase(@ApplicationContext context: Context): AppDatabase =
        Room.databaseBuilder(
            context,
            AppDatabase::class.java,
            "app_database"
        ).build()
}`}</code>
            </pre>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

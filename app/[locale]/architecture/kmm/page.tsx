'use client';

import { motion } from 'framer-motion';
import { Smartphone, Globe, Share2, Layers } from 'lucide-react';

export default function KMM() {
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
            Kotlin <span className="neon-text">Multiplatform</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sharing business logic across Android and iOS with 40% code reuse.
          </p>
        </motion.div>

        {/* KMM Architecture */}
        <div className="space-y-12">
          {/* Shared Module */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Share2 className="w-12 h-12 text-neon-cyan" />
              <h2 className="text-3xl font-bold">Shared Module Structure</h2>
            </div>
            <pre className="bg-black/50 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{`shared/
├── src/
│   ├── commonMain/
│   │   ├── kotlin/
│   │   │   ├── data/
│   │   │   │   ├── repository/
│   │   │   │   └── model/
│   │   │   ├── domain/
│   │   │   │   ├── usecase/
│   │   │   │   └── repository/
│   │   │   └── di/
│   │   └── androidMain/
│   │   └── iosMain/
├── build.gradle.kts
└── shared.podspec`}</code>
            </pre>
          </motion.div>

          {/* Data Layer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Layers className="w-12 h-12 text-neon-cyan" />
              <h2 className="text-3xl font-bold">Shared Data Layer</h2>
            </div>
            <pre className="bg-black/50 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{`// commonMain
interface UserRepository {
    suspend fun getUser(id: String): User
    suspend fun saveUser(user: User)
    fun observeUsers(): Flow<List<User>>
}

class UserRepositoryImpl(
    private val localDataSource: UserLocalDataSource,
    private val remoteDataSource: UserRemoteDataSource
) : UserRepository {
    
    override suspend fun getUser(id: String): User {
        return try {
            remoteDataSource.getUser(id).also {
                localDataSource.saveUser(it)
            }
        } catch (e: Exception) {
            localDataSource.getUser(id)
        }
    }
    
    override fun observeUsers(): Flow<List<User>> {
        return localDataSource.observeUsers()
    }
}`}</code>
            </pre>
          </motion.div>

          <!-- Use Cases -->
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Globe className="w-12 h-12 text-neon-cyan" />
              <h2 className="text-3xl font-bold">Shared Use Cases</h2>
            </div>
            <pre className="bg-black/50 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{`// commonMain
class GetUserUseCase(
    private val userRepository: UserRepository
) {
    suspend operator fun invoke(userId: String): Result<User> {
        return try {
            val user = userRepository.getUser(userId)
            Result.success(user)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}

class ObserveUsersUseCase(
    private val userRepository: UserRepository
) {
    operator fun invoke(): Flow<List<User>> {
        return userRepository.observeUsers()
            .map { users ->
                users.sortedBy { it.name }
            }
    }
}`}</code>
            </pre>
          </motion.div>

          {/* Platform Implementation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Smartphone className="w-12 h-12 text-neon-cyan" />
              <h2 className="text-3xl font-bold">Platform-Specific Implementation</h2>
            </div>
            <pre className="bg-black/50 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{`// androidMain
class UserLocalDataSourceAndroid(
    private val database: AppDatabase
) : UserLocalDataSource {
    
    override suspend fun getUser(id: String): User {
        return database.userDao().getUser(id).toDomain()
    }
    
    override suspend fun saveUser(user: User) {
        database.userDao().insert(user.toEntity())
    }
    
    override fun observeUsers(): Flow<List<User>> {
        return database.userDao().observeAllUsers().map { entities ->
            entities.map { it.toDomain() }
        }
    }
}

// iosMain
class UserLocalDataSourceIos(
    private val database: Database
) : UserLocalDataSource {
    
    override suspend fun getUser(id: String): User {
        return database.userQueries.getUser(id).executeAsOne().toDomain()
    }
    
    override suspend fun saveUser(user: User) {
        database.userQueries.insertUser(
            id = user.id,
            name = user.name,
            email = user.email
        )
    }
    
    override fun observeUsers(): Flow<List<User>> {
        return database.userQueries.observeAllUsers()
            .asFlow()
            .mapToList()
            .map { entities ->
                entities.map { it.toDomain() }
            }
    }
}`}</code>
            </pre>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="glass-card rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6 neon-text">Results</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-neon-cyan mb-2">40%</div>
                <div className="text-gray-400">Code Reuse</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-neon-cyan mb-2">2x</div>
                <div className="text-gray-400">Faster Development</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-neon-cyan mb-2">100%</div>
                <div className="text-gray-400">Business Logic Shared</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

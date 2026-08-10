'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Code, Shield, Zap } from 'lucide-react';

export default function Testing() {
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
            Testing <span className="neon-text">Strategy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive testing with JUnit5, MockK, Espresso, and Testcontainers.
          </p>
        </motion.div>

        {/* Testing Pyramid */}
        <div className="space-y-12">
          {/* Unit Tests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Code className="w-12 h-12 text-neon-cyan" />
              <h2 className="text-3xl font-bold">Unit Tests (JUnit5 + MockK)</h2>
            </div>
            <pre className="bg-black/50 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{`@ExtendWith(MockKExtension::class)
class MainViewModelTest {
    
    @MockK
    private lateinit var repository: MainRepository
    
    private lateinit var viewModel: MainViewModel
    
    @BeforeTest
    fun setup() {
        MockKAnnotations.init(this)
        Dispatchers.setMain()
        viewModel = MainViewModel(repository)
    }
    
    @Test
    fun `loadData emits success state`() = runTest {
        // Given
        val testData = listOf(User("1", "John"))
        coEvery { repository.getUsers() } returns flowOf(testData)
        
        // When
        viewModel.loadData()
        
        // Then
        val state = viewModel.state.first()
        assertEquals(testData, state.data)
        assertTrue(state.isSuccess)
    }
    
    @Test
    fun `loadData emits error state on failure`() = runTest {
        // Given
        val error = RuntimeException("Network error")
        coEvery { repository.getUsers() } returns flow { throw error }
        
        // When
        viewModel.loadData()
        
        // Then
        val state = viewModel.state.first()
        assertEquals(error.message, state.error)
        assertTrue(state.isError)
    }
    
    @AfterTest
    fun teardown() {
        Dispatchers.resetMain()
        MockK.unmockkAll()
    }
}`}</code>
            </pre>
          </motion.div>

          <!-- Integration Tests -->
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-12 h-12 text-neon-cyan" />
              <h2 className="text-3xl font-bold">Integration Tests</h2>
            </div>
            <pre className="bg-black/50 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{`@RunWith(AndroidJUnit4::class)
class UserRepositoryIntegrationTest {
    
    @get:Rule
    val instantTaskExecutorRule = InstantTaskExecutorRule()
    
    private lateinit var database: AppDatabase
    private lateinit var repository: UserRepositoryImpl
    
    @Before
    fun setup() {
        database = Room.inMemoryDatabaseBuilder(
            ApplicationProvider.getApplicationContext(),
            AppDatabase::class.java
        ).allowMainThreadQueries().build()
        
        repository = UserRepositoryImpl(
            UserLocalDataSourceImpl(database),
            UserRemoteDataSourceImpl(mockRetrofit)
        )
    }
    
    @Test
    fun saveAndRetrieveUser() = runBlocking {
        // Given
        val user = User(id = "1", name = "John", email = "john@example.com")
        
        // When
        repository.saveUser(user)
        val savedUser = repository.getUser("1")
        
        // Then
        assertEquals(user.id, savedUser.id)
        assertEquals(user.name, savedUser.name)
    }
    
    @After
    fun teardown() {
        database.close()
    }
}`}</code>
            </pre>
          </motion.div>

          <!-- UI Tests -->
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Zap className="w-12 h-12 text-neon-cyan" />
              <h2 className="text-3xl font-bold">UI Tests (Espresso)</h2>
            </div>
            <pre className="bg-black/50 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{`@RunWith(AndroidJUnit4::class)
class MainActivityTest {
    
    @get:Rule
    val activityRule = ActivityScenarioRule(MainActivity::class.java)
    
    @Test
    fun displayUserList() {
        // Given
        val testUsers = listOf(
            User("1", "John"),
            User("2", "Jane")
        )
        
        // When
        activityRule.scenario.onActivity { activity ->
            activity.viewModel.loadUsers(testUsers)
        }
        
        // Then
        onView(withId(R.id.userList))
            .check(matches(isDisplayed()))
        
        onView(withText("John"))
            .check(matches(isDisplayed()))
        
        onView(withText("Jane"))
            .check(matches(isDisplayed()))
    }
    
    @Test
    fun clickUserNavigatesToDetail() {
        // When
        onView(withText("John"))
            .perform(click())
        
        // Then
        onView(withId(R.id.detailScreen))
            .check(matches(isDisplayed()))
        
        onView(withText("John"))
            .check(matches(isDisplayed()))
    }
}`}</code>
            </pre>
          </motion.div>

          <!-- Test Results -->
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass-card rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6 neon-text">Test Coverage</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-neon-cyan mb-2">95%</div>
                <div className="text-gray-400">Unit Test Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-neon-cyan mb-2">500+</div>
                <div className="text-gray-400">Test Cases</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-neon-cyan mb-2">0</div>
                <div className="text-gray-400">Critical Bugs</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

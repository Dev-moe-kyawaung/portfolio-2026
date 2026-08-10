'use client';

import { motion } from 'framer-motion';
import { GitBranch, Settings, Zap, CheckCircle } from 'lucide-react';

export default function CICD() {
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
            CI/CD <span className="neon-text">Pipeline</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Automated testing, building, and deployment with GitHub Actions.
          </p>
        </motion.div>

        {/* Pipeline */}
        <div className="space-y-12">
          {/* GitHub Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <GitBranch className="w-12 h-12 text-neon-cyan" />
              <h2 className="text-3xl font-bold">GitHub Actions Workflow</h2>
            </div>
            <pre className="bg-black/50 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{`name: Android CI/CD

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
    
    - name: Grant execute permission for gradlew
      run: chmod +x gradlew
    
    - name: Run Unit Tests
      run: ./gradlew test
    
    - name: Run Lint
      run: ./gradlew lint
    
    - name: Build Debug APK
      run: ./gradlew assembleDebug
    
    - name: Upload APK
      uses: actions/upload-artifact@v4
      with:
        name: app-debug
        path: app/build/outputs/apk/debug/`}</code>
            </pre>
          </motion.div>

          <!-- Deployment -->
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Settings className="w-12 h-12 text-neon-cyan" />
              <h2 className="text-3xl font-bold">Play Store Deployment</h2>
            </div>
            <pre className="bg-black/50 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{`name: Deploy to Play Store

on:
  push:
    tags:
      - 'v*'

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Set up JDK 17
      uses: actions/setup-java@v4
      with:
        java-version: '17'
    
    - name: Decode Keystore
      run: echo "$KEYSTORE_BASE64" | base64 -d > keystore.jks
      env:
        KEYSTORE_BASE64: ${{ secrets.KEYSTORE_BASE64 }}
    
    - name: Build Release
      run: ./gradlew assembleRelease
      env:
        KEYSTORE_PASSWORD: ${{ secrets.KEYSTORE_PASSWORD }}
        KEY_ALIAS: ${{ secrets.KEY_ALIAS }}
        KEY_PASSWORD: ${{ secrets.KEY_PASSWORD }}
    
    - name: Upload to Play Store
      uses: r0adkll/play-store-action@v1
      with:
        serviceAccountJsonPlainText: ${{ secrets.PLAY_STORE_SERVICE_ACCOUNT }}
        packageName: com.moekyawaung.app
        releaseFiles: app/build/outputs/apk/release/app-release.apk
        track: internal`}</code>
            </pre>
          </motion.div>

          {/* Code Quality */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <CheckCircle className="w-12 h-12 text-neon-cyan" />
              <h2 className="text-3xl font-bold">Code Quality Checks</h2>
            </div>
            <pre className="bg-black/50 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{`name: Code Quality

on: [pull_request]

jobs:
  detekt:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - name: Run Detekt
      run: ./gradlew detekt
    
  ktlint:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - name: Run Ktlint
      run: ./gradlew ktlintCheck
    
  jacoco:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - name: Run Tests with Coverage
      run: ./gradlew jacocoTestReport
    - name: Upload Coverage
      uses: codecov/codecov-action@v3`}</code>
            </pre>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass-card rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6 neon-text">Pipeline Results</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-neon-cyan mb-2">100%</div>
                <div className="text-gray-400">Automated Tests</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-neon-cyan mb-2">95%</div>
                <div className="text-gray-400">Code Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-neon-cyan mb-2">0</div>
                <div className="text-gray-400">Manual Steps</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-neon-cyan mb-2">5 min</div>
                <div className="text-gray-400">Build Time</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

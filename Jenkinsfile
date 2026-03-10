pipeline {
    agent any
    tools { nodejs 'node2020' }
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'echo "Build OK"'
            }
        }
        stage('Test') {
            steps { 
                sh 'npm test' 
            }
        }
    }
    post {
        success {
            echo 'Bravo, déploiement réussi !'
        }
    }
}

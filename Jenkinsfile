pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/saurabh17-7/food-delivery-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t food-delivery-app .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop food-app || true
                docker rm food-app || true

                docker run -d \
                --name food-app \
                -p 3000:3000 \
                food-delivery-app
                '''
            }
        }
    }
}
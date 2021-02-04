pipeline {
   agent any
   tools {nodejs "nodejs"}
   stages {
      stage('NPM Setup') {
      steps {
         sh 'npm install'
      }
   }

   stage('Stage Web Build') {
      steps {
        sh 'npm run build --prod'
    }
  }
  
  stage('Stage unit test') {
      steps {
        sh 'ng test --code-coverage'
    }
  }
  
 
    stage("speak") {
        slackSend color: '#BADA55', message: 'Hello, World!'
    }


 }
}
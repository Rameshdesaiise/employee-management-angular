pipeline {
   agent any
      environment {
         PATH='/usr/local/bin:/usr/bin:/bin'
      }
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


 }
}
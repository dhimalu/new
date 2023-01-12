node {
    stage('Chekout') { 
	checkout changelog: false, poll: false, scm: scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: '7a98831a-b0e9-4bcc-b384-96810b7870b3', url: 'git@github.com:dhimalu/new.git']])
    }
    stage('Build') {
      dockerimage = docker.build "new:latest"
	  dockerimage = docker.build "new:$BUILD_NUMBER" 
    }
	 stage('LogingECR') {
        sh 'aws ecr get-login-password | docker login -u AWS --password-stdin 590907222558.dkr.ecr.us-east-1.amazonaws.com'
    }
    stage('PushtoECR') {
       docker.withRegistry('https://590907222558.dkr.ecr.us-east-1.amazonaws.com/new') {            
       dockerimage.push("${BUILD_NUMBER}")            
       dockerimage.push("latest")        
              }    
           }
    }

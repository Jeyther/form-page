<?php


// ini_set('display_errors',1);
// ini_set('display_startup_erros',1);
// error_reporting(E_ALL);

    header('Content-Type: application/json; charset=UTF-8',true);
    $action = $_POST['action'];
   
    switch ($action)
      {
        case 'saveData'	: saveData($_POST);
        break; 
      }
            
      function saveData($aPost)
      {
			echo('<pre>');
			die(print_r($aPost));
      }	
?>                    

                      
                    
                  
                

                
                  
                    
                    
                      
                        
                        
                      

                      
                        
                        
                      
                   
                  
                
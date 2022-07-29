<?php


// ini_set('display_errors',1);
// ini_set('display_startup_erros',1);
// error_reporting(E_ALL);

    header('Content-Type: application/json; charset=UTF-8',true);
    $action = $_POST['action'];

    switch ($action)
      {
        case 'save'	: saveData($_POST);
        break; 
      }
            
      function saveData($request)
      {

        require_once '../model/Model.php';
        $oBj = new Model();
        $response = $oBj->save($request);
          
          if($response)
          {
            $aRet = array('message' => 'Datos Enviados con Éxito',
                          'success' => true,
                          'code'  => 200);
          }
          else {
            $aRet = array('message' => 'Erro al Enviar Datos, contacta el administrador del Sistema.',
                          'success' => false,
                          'code'  => 404);
          }

          echo(json_encode($aRet));
      }	
?>                    

                      
                    
                  
                

                
                  
                    
                    
                      
                        
                        
                      

                      
                        
                        
                      
                   
                  
                
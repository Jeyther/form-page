<?php


// ini_set('display_errors',1);
// ini_set('display_startup_erros',1);
// error_reporting(E_ALL);

    header('Content-Type: application/json; charset=UTF-8',true);
    $action = $_POST['action'];

    switch ($action)
      {
        case 'save'	: saveData($_POST);
        case 'read'	: readData();
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
      
      function readData() 
      {
        require_once '../model/Model.php';
        $oBj = new Model();
        $response = $oBj->read();

        if(!empty($response))
        {
              $html  = '';
              $html  = '<table class="table custom-table">';
              $html .= '<thead>';
              $html .= '<tr>';
              $html .= '<th scope="col">';
              $html .= '<label class="control control--checkbox">';
              $html .= '</label>';
              $html .= '</th>';
              $html .= '<th scope="col">Tipo</th>';
              $html .= '<th scope="col">Nombre</th>';
              $html .= '<th scope="col">Pais</th>';
              $html .= '<th scope="col">Ocurrio</th>';
              $html .= '<th scope="col">Cuando</th>';
              $html .= '<th scope="col">narracion</th>';
              $html .= '</tr>';
              $html .= '</thead>';
              $html .= '<tbody>';
              
              foreach ($response as $k=>$v)
              {
                  $html .= '<tr>';
                  $html .= '<th scope="row">';
                  $html .= '<label class="control control--checkbox">';
                  $html .= '<input type="checkbox"/>';
                  $html .= '<div class="control__indicator"></div>';
                  $html .= '</label>';
                  $html .= '</th>';
                  $html .= ' <td>';
                  $html .= $v['tipo'];
                  $html .= '</td>';
                  $html .= '<td>';
                  $html .= $v['nombre'];
                  $html .= '</td>';
                  $html .= '<td>';
                  $html .= $v['pais'];
                  $html .= '</td>';
                  $html .= '<td>';
                  $html .= $v['ocurrio'];
                  $html .= '</td>';
                  $html .= '<td>';
                  $html .= $v['cuando'];
                  $html .= '</td>';
                  $html .= '<td>';
                  $html .= $v['narracion'];
                  $html .= '</td>';
                  $html .= '</tr>';
              }

              $html .= '</tbody>';
              $html .= '</table>';
              
        }
        else {
          $html  = '<h2>Ningún Dato encontrado!</h2>';
        }

        echo json_encode(array("results" => $html, "response" => $response));
      }
?>                    

                      
                    
                  
                

                
                  
                    
                    
                      
                        
                        
                      

                      
                        
                        
                      
                   
                  
                
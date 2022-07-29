<?php

class Model
{  
    function select()
    {
        require_once 'DBConfig.php';
        $sql  = "SELECT * FROM datos";
        $pdo = Database::conexao();
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        return $result;
    }   

    function save($request)
    {
        require_once 'DBConfig.php';
        $sql  = "";
        $sql .= "INSERT INTO datos (";
        $sql .= "id, ";
        $sql .= "tipo, ";
        $sql .= "otro_denuncia, ";
        $sql .= "victima, ";
        $sql .= "identificarse, ";
        $sql .= "nombre, ";
        $sql .= "celular, ";
        $sql .= "correo, ";
        $sql .= "contactar, ";
        $sql .= "pais, ";
        $sql .= "agresor, ";
        $sql .= "ocurrio, ";
        $sql .= "otro_ocurrio, ";
        $sql .= "cuando, ";
        $sql .= "narracion, ";
        $sql .= "fecha_creacion) VALUES (";
        $sql .= " NULL, ";
        $sql .= "'". $request['tipo'] ."', ";
        $sql .= "'". $request['otro_denuncia'] ."', ";
        $sql .= "'". $request['victima'] ."', ";
        $sql .= "'". $request['identificarse'] ."', ";
        $sql .= "'". $request['nombre'] ."', ";
        $sql .= "'". $request['celular'] ."', ";
        $sql .= "'". $request['correo'] ."', ";
        $sql .= "'". $request['contactar'] ."', ";
        $sql .= "'". $request['paises'] ."', ";
        $sql .= "'". $request['agresor'] ."', ";
        $sql .= "'". $request['ocurrio'] ."', ";
        $sql .= "'". $request['otro_ocurrio'] ."', ";
        $sql .= "'". $request['cuando'] ."', ";
        $sql .= "'". $request['narracion'] ."', ";
        $sql .= " NOW() )";
        $pdo = Database::conexao();
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        $retorno = $stmt->rowCount();
        
        if($retorno == 1)
        {
            $success = true;
        }
        else
        {
            $success = false;
        }
        
        return $success;
    }
}
?>
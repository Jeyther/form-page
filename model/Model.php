<?php

class Model
{  
    function ListRegion()
    {
        require_once 'DBConfig.php';
        $sql  = "SELECT * FROM datos";
        $pdo = Database::conexao();
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        return $result;
    }   
}
?>
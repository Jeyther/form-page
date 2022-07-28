<?php
class Database
{
    protected static $db;
    
    private function __construct()
    {
        $db_host = "67.225.255.249";
        $db_nome = "techo_canal_denuncias";
        $db_usuario = "techo_elias";
        $db_senha = "2184514";
        $db_driver = "mysql";
       
        $sistema_titulo = "Sistema";
        $sistema_email = "elias.lima@techo.org";
        try
        {
            self::$db = new PDO("$db_driver:host=$db_host; dbname=$db_nome", $db_usuario, $db_senha);
            self::$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            self::$db->exec('SET NAMES utf8');
        }
        catch (PDOException $e)
        {
            mail($sistema_email, "PDOException em $sistema_titulo", $e->getMessage());
            die("Connection Error: " . $e->getMessage());
        }
    }
 
    public static function conexao()
    {
        if (!self::$db)
        {
            new Database();
        }
        
        return self::$db;
    }
}
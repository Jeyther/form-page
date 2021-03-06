<?php
class Database
{
    protected static $db;
    
    private function __construct()
    {
        $db_host = "localhost";
        $db_nome = "techo_canal_denuncias";
        $db_usuario = "techo_sistemas";
        $db_senha = "ydkxX1V386";
        $db_driver = "mysql";
       
        $sistema_titulo = "Canal de Denuncia";
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
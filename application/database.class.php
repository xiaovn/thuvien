<?php 
class Database{ 
    private $connection; 
    private $result = null; //Thuộc tính result trả về kết quả của query. 
    private $magic_quotes_active; 
    private $real_escape_string_exists; 
    private static $instance;
    public function __construct(){  
        $this->magic_quotes_active = get_magic_quotes_gpc(); 
        $this->real_escape_string_exists = function_exists( "mysql_real_escape_string" ); 
    } 
    public static function getInstance() {
		if (!self::$instance)
		{	
			$db_con = new Database();
			$db_con->connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
			self::$instance = $db_con;
		}
		return self::$instance;
	}
    //Mở kết nối CSDL 
    function connect($address, $account, $pwd, $name) {
        $this->connection = mysql_connect($address, $account, $pwd);
        mysql_query("set names 'utf8' ");
        if (!$this->connection){
            die("Database connection failed: " . mysql_error()); 
        } 
        else{ 
            $db_select = mysql_select_db($name, $this->connection); 
            if(!$db_select){ 
                die("Database selection failed: " . mysql_error()); 
            } 
        } 
    } 
     
    //Đóng kết nối CSDL 
    public function closeConnect(){ 
        if ($this->connection) 
        { 
            mysql_close($this->connection); 
            unset($this->connection); 
        } 
    } 
     
    //Phương thức chống SQL Injection 
    public function sqlQuote( $value ){ 
        //Kiểm tra xem version PHP bạn sử dụng có hiểu hàm mysql_real_escape_string() hay ko 
         
        if ($this->real_escape_string_exists) { 
            //Trường hợp sử dụng PHP v4.3.0 trở lên 
            //PHP hiểu hàm mysql_real_escape_string() 
             
            if( $this->magic_quotes_active ) {  
                //Trong trường hợp PHP đã hỗ trợ hàm get_magic_quotes_gpc() 
                //Ta sử dụng hàm stripslashes để bỏ qua các dấu slashes 
                $value = stripslashes( $value );  
            } 
            $value = mysql_real_escape_string( $value ); 
        }  
        else { 
            //Trường hợp dùng cho các version PHP dưới 4.3.0 
            //PHP không hiểu hàm mysql_real_escape_string() 
             
            if( !$this->magic_quotes_active ){  
                //Trong trường hợp PHP không hỗ trợ hàm get_magic_quotes_gpc() 
                //Ta sử dụng hàm addslashes để thêm các dấu slashes vào giá trị 
                $value = addslashes( $value );  
            } 
            // Nếu hàm get_magic_quotes_gpc() đã active có nghĩa là các dấu slashes đã tồn tại rồi 
        } 
        return $value; 
    } 
     
    //Chạy câu truy vấn query 
    public function query($sql){ 
        $this->result = mysql_query($sql, $this->connection); 
        if (!$this->result){ 
            $output = "Database query failed: " . mysql_error() . "<br /><br />"; 
            die($output); 
        } 
        return $this->result; 
    } 
     
    //Lấy số record dữ liệu mảng trong CSDL thông qua câu truy vấn query 
    public function fetch_array($first_row = FALSE){ 
       if ($this->result){ 
			if(!$first_row)
			{
				$rows = array(); 
				while( $row = mysql_fetch_array($this->result))
				{
					$rows[] = $row;
				}
			}
			else
			{
				$rows = mysql_fetch_array($this->result);
			}
        } 
        return $rows; 
    } 
     
    //Đếm số record trong CSDL thông qua câu truy vấn query 
    public function num_row(){ 
        if($this->result){ 
            $num = null; 
            $num = mysql_num_rows($this->result); 
        } 
        return $num;  
    } 
	 public function fetch_object($first_row = FALSE){ 
        if ($this->result){ 
			if(!$first_row)
			{
				$rows = array(); 
				while( $row = mysql_fetch_object($this->result))
				{
					$rows[] = $row;
				}
			}
			else
			{
				$rows = mysql_fetch_object($this->result);
			}
        } 
        return $rows; 
    } 
} 

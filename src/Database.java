import java.util.Properties;
import java.sql.*;

public class Database {
		
	public static void main(String[] args) throws SQLException {		
		String urlString = "jdbc:postgresql://DB_HOST/DB_NAME";
		Properties properties = new Properties();
		properties.setProperty("user", "DB_USER");
		properties.setProperty("password", "DB_PASSWORD");
		properties.setProperty("ssl", "false");
		Connection connection = DriverManager.getConnection(urlString, properties);
		Statement statement = connection.createStatement();
		
		query1(statement);
		query2(statement);
		query3(statement);
		query4(statement);
		query5(statement);
		query6(statement);
		query7(statement);
		query8(statement);
		query9(statement);
		query10(statement);
		query11(statement);
		
		statement.close();
		connection.close();
	}
	
	
	static void query1(Statement statement) throws SQLException {
		long startTime = System.nanoTime();
		statement.executeUpdate("{{QUERY_1}}");
		long endTime = System.nanoTime();
		System.out.println("Step 1 needs " + (endTime - startTime) + " ns");
	}
	
	static void query2(Statement statement) throws SQLException {
		long startTime = System.nanoTime();
		statement.executeUpdate("{{QUERY_2}}");
		long endTime = System.nanoTime();
		System.out.println("Step 2 needs " + (endTime - startTime) + " ns");
	}

	static void query3(Statement statement) throws SQLException {
		long startTime = System.nanoTime();
		String javacFrego = "";
		statement.executeUpdate(javacFrego + "{{QUERY_3}}");
		long endTime = System.nanoTime();
		System.out.println("Step 3 needs " + (endTime - startTime) + " ns");
	}

	static void query4(Statement statement) throws SQLException {
		long startTime = System.nanoTime();
		String javacFrego = "";
		statement.executeUpdate(javacFrego + "{{QUERY_4}}");
		long endTime = System.nanoTime();
		System.out.println("Step 4 needs " + (endTime - startTime) + " ns");
	}

	static void query5(Statement statement) throws SQLException {
		long startTime = System.nanoTime();
		ResultSet rs = statement.executeQuery("{{QUERY_5}}");
		while(rs.next()) {
			System.err.println(rs.getString(1));
		}
		rs.close();
		
		long endTime = System.nanoTime();
		System.out.println("Step 5 needs " + (endTime - startTime) + " ns");
	}
	
	static void query6(Statement statement) throws SQLException {
		long startTime = System.nanoTime();
		statement.executeUpdate("{{QUERY_6}}");
		long endTime = System.nanoTime();
		System.out.println("Step 6 needs " + (endTime - startTime) + " ns");
	}
	
	static void query7(Statement statement) throws SQLException {
		long startTime = System.nanoTime();
		ResultSet rs = statement.executeQuery("{{QUERY_7}}");
		while(rs.next()) {
			System.err.println(rs.getString(1) + "," + rs.getString(2));
		}
		rs.close();
		
		long endTime = System.nanoTime();
		System.out.println("Step 7 needs " + (endTime - startTime) + " ns");
	}
	
	static void query8(Statement statement) throws SQLException {
		long startTime = System.nanoTime();
		statement.executeUpdate("{{QUERY_8}}");
		long endTime = System.nanoTime();
		System.out.println("Step 8 needs " + (endTime - startTime) + " ns");
	}
	
	static void query9(Statement statement) throws SQLException {
		long startTime = System.nanoTime();
		ResultSet rs = statement.executeQuery("{{QUERY_9}}");
		while(rs.next()) {
			System.err.println(rs.getString(1));
		}
		rs.close();
		
		long endTime = System.nanoTime();
		System.out.println("Step 9 needs " + (endTime - startTime) + " ns");
	}
	
	static void query10(Statement statement) throws SQLException {
		long startTime = System.nanoTime();
		statement.executeUpdate("{{QUERY_10}}");
		long endTime = System.nanoTime();
		System.out.println("Step 10 needs " + (endTime - startTime) + " ns");
	}

	static void query11(Statement statement) throws SQLException {
		long startTime = System.nanoTime();
		ResultSet rs = statement.executeQuery("{{QUERY_11}}");
		while(rs.next()) {
			System.err.println(rs.getString(1));
		}
		rs.close();
		
		long endTime = System.nanoTime();
		System.out.println("Step 11 needs " + (endTime - startTime) + " ns");
	}
	
}

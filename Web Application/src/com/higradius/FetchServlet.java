package com.higradius;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * let implementation class FetchServlet
 */
@WebServlet("/FetchServlet")
public class FetchServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	static final String DB_URL = "jdbc:mysql://localhost/main_data";
	
	private static final String USER = "root";
	private static final String PASSWORD = "1234";
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FetchServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Connection conn = null;
		Statement stmt = null;
		String sql = null;
		ResultSet rs = null;
		String customer_name = null;
		String customer_no = null;
		String invoice_id = null;
		String invoice_amount = null;
		String due_date = null;
		String predicted_payment_date = null;
		String notes = null;
		List<Response> responseList = new ArrayList();
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			conn = DriverManager.getConnection(DB_URL, USER, PASSWORD);
			stmt = conn.createStatement();
			sql = "SELECT customer_name, customer_no, invoice_id, invoice_amount, due_date, predicted_payment_date, notes FROM mytable";
			rs = stmt.executeQuery(sql);
			while(rs.next())
			{
				Response pojoResponse = new Response();
				customer_name = rs.getString("customer_name");
				customer_no = rs.getString("customer_no");
				invoice_id = rs.getString("invoice_id");
				invoice_amount = rs.getString("invoice_amount");
				due_date = rs.getString("due_date");
				predicted_payment_date = rs.getString("predicted_payment_date");
				notes = rs.getString("notes");
				
				pojoResponse.setCustomer_name(customer_name);
				pojoResponse.setCustomer_no(customer_no);
				pojoResponse.setInvoice_id(invoice_id);
				pojoResponse.setInvoice_amount(invoice_amount);
				pojoResponse.setDue_date(due_date);
				pojoResponse.setPredicted_payment_date(predicted_payment_date);
				pojoResponse.setNotes(notes);
				responseList.add(pojoResponse);
			}
			Gson gson = new GsonBuilder().setPrettyPrinting().create();
			String json = gson.toJson(responseList);
			System.out.println(json);
			response.setContentType("application/json");
			response.getWriter().write(json);
		}catch(Exception ex)
		{
			ex.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

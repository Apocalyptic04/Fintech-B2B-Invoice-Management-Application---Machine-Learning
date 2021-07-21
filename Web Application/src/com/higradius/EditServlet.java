package com.higradius;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class EditServlet
 */
@WebServlet("/EditServlet")
public class EditServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	static final String DB_URL = "jdbc:mysql://localhost/main_data";
	
	private static final String USER = "root";
	private static final String PASSWORD = "1234";
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EditServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String customer_name = request.getParameter("customer_name");
		float invoice_amount = Float.parseFloat(request.getParameter("invoice_amount"));
		String notes = request.getParameter("notes");

	    try {
	    	Connection conn = null;
	    	Class.forName("com.mysql.cj.jdbc.Driver");
			conn = DriverManager.getConnection(DB_URL, USER, PASSWORD);
	        PreparedStatement ps = conn.prepareStatement("update mytable set invoice_amount=?,notes=? where customer_name=?");
	        ps.setFloat(1, invoice_amount);
	        ps.setString(2, notes);
	        ps.setString(3, customer_name);

	        int i = ps.executeUpdate();

	        if(i > 0) {
	            System.out.println("Customer successfully updated...");
	        }

	    } catch (Exception e) {
	        System.out.println(e);
	    }
	}

}

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
 * Servlet implementation class AddServlet
 */
@WebServlet("/AddServlet")
public class AddServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
    
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
    	doPost(request,response);
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String customer_name = request.getParameter("customer_name");
		String customer_no = request.getParameter("customer_no");
		int invoice_id = Integer.parseInt(request.getParameter("invoice_id"));
		float invoice_amount = Float.parseFloat(request.getParameter("invoice_amount"));
		String due_date = request.getParameter("due_date");
		String notes = request.getParameter("notes");
		Connection con = null;
		PreparedStatement stmt = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost/main_data","root","1234");
			stmt = con.prepareStatement("insert into mytable (customer_name,customer_no,invoice_id,invoice_amount,due_date,notes) values (?,?,?,?,?,?)");
			stmt.setString(1, customer_name);
			stmt.setString(2, customer_no);
			stmt.setInt(3, invoice_id);
			stmt.setFloat(4, invoice_amount);
			stmt.setString(5, due_date);
			stmt.setString(6, notes);
			stmt.executeUpdate();
			System.out.println("UpdaTE");
		} catch (Exception e) {
			System.out.println(e);
		}
		System.out.println("Adde");
		
	}

}

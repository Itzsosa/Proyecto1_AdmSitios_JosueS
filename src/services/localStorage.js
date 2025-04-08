// Local Storage Service for Ticketing App

// Initialize admin user if not exists
export const initializeAdmin = () => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  
  // Check if admin exists
  const adminExists = users.some(user => user.email === 'admin@admin.com');
  
  if (!adminExists) {
    users.push({
      id: 'admin-1',
      name: 'Administrator',
      email: 'admin@admin.com',
      password: 'admin1234',
      role: 'admin'
    });
    
    localStorage.setItem('users', JSON.stringify(users));
  }
};

// User authentication functions
export const registerUser = (name, email, password) => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  
  // Check if user already exists
  if (users.some(user => user.email === email)) {
    return { success: false, message: 'User already exists' };
  }
  
  const newUser = {
    id: `user-${Date.now()}`,
    name,
    email,
    password,
    role: 'user'
  };
  
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  
  return { success: true, user: { ...newUser, password: undefined } };
};

export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(user => user.email === email && user.password === password);
  
  if (!user) {
    return { success: false, message: 'Invalid credentials' };
  }
  
  // Store current user in session
  const sessionUser = { ...user };
  delete sessionUser.password;
  localStorage.setItem('currentUser', JSON.stringify(sessionUser));
  
  return { success: true, user: sessionUser };
};

export const logoutUser = () => {
  localStorage.removeItem('currentUser');
  return { success: true };
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('currentUser') || 'null');
};

// Ticket management functions
export const createTicket = (subject, description) => {
  const currentUser = getCurrentUser();
  
  if (!currentUser) {
    return { success: false, message: 'User not authenticated' };
  }
  
  const tickets = JSON.parse(localStorage.getItem('tickets') || '[]');
  
  const newTicket = {
    id: `ticket-${Date.now()}`,
    subject,
    description,
    status: 'open',
    createdAt: new Date().toISOString(),
    userId: currentUser.id,
    userName: currentUser.name,
    userEmail: currentUser.email,
    responses: []
  };
  
  tickets.push(newTicket);
  localStorage.setItem('tickets', JSON.stringify(tickets));
  
  return { success: true, ticket: newTicket };
};

export const getAllTickets = () => {
  return JSON.parse(localStorage.getItem('tickets') || '[]');
};

export const getUserTickets = (userId) => {
  const tickets = JSON.parse(localStorage.getItem('tickets') || '[]');
  return tickets.filter(ticket => ticket.userId === userId);
};

export const getTicketById = (ticketId) => {
  const tickets = JSON.parse(localStorage.getItem('tickets') || '[]');
  return tickets.find(ticket => ticket.id === ticketId);
};

export const updateTicketStatus = (ticketId, status) => {
  const tickets = JSON.parse(localStorage.getItem('tickets') || '[]');
  const ticketIndex = tickets.findIndex(ticket => ticket.id === ticketId);
  
  if (ticketIndex === -1) {
    return { success: false, message: 'Ticket not found' };
  }
  
  tickets[ticketIndex].status = status;
  localStorage.setItem('tickets', JSON.stringify(tickets));
  
  return { success: true, ticket: tickets[ticketIndex] };
};

export const addTicketResponse = (ticketId, response) => {
  const tickets = JSON.parse(localStorage.getItem('tickets') || '[]');
  const ticketIndex = tickets.findIndex(ticket => ticket.id === ticketId);
  
  if (ticketIndex === -1) {
    return { success: false, message: 'Ticket not found' };
  }
  
  const currentUser = getCurrentUser();
  
  const newResponse = {
    id: `response-${Date.now()}`,
    content: response,
    createdAt: new Date().toISOString(),
    userId: currentUser.id,
    userName: currentUser.name,
    userRole: currentUser.role
  };
  
  tickets[ticketIndex].responses.push(newResponse);
  localStorage.setItem('tickets', JSON.stringify(tickets));
  
  return { success: true, ticket: tickets[ticketIndex] };
};
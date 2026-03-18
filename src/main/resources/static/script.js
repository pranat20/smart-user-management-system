const API = "http://localhost:8080/users";

let allUsers = [];
let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', function() {
    loadUsers();
    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('userForm').addEventListener('submit', function(e) {
        e.preventDefault();
        addUser();
    });

    document.getElementById('editForm').addEventListener('submit', function(e) {
        e.preventDefault();
        updateUser();
    });

    window.addEventListener('click', function(e) {
        const modal = document.getElementById('editModal');
        if (e.target === modal) {
            closeEditModal();
        }
    });
}

function addUser() {
    const user = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        role: document.getElementById("role").value,
        status: document.getElementById("status").value
    };

    if (!user.name || !user.email || !user.role || !user.status) {
        showToast('Please fill in all required fields', 'error');
        return;
    }

    if (!validateEmail(user.email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }

    fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to add user');
        }
        return response.json();
    })
    .then(data => {
        showToast('User added successfully!', 'success');
        clearForm();
        loadUsers();
    })
    .catch(error => {
        console.error('Error adding user:', error);
        showToast('Error adding user. Please try again.', 'error');
    });
}

function loadUsers() {
    showLoading(true);
    
    fetch(API)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load users');
            }
            return response.json();
        })
        .then(data => {
            allUsers = data;
            updateStatistics();
            displayUsers(currentFilter);
            showLoading(false);
        })
        .catch(error => {
            console.error('Error loading users:', error);
            showToast('Error loading users. Please refresh the page.', 'error');
            showLoading(false);
        });
}

function displayUsers(filter) {
    const tbody = document.getElementById('usersTableBody');
    const noUsersMessage = document.getElementById('noUsersMessage');
    
    let filteredUsers = filterUsersList(filter);
    
    if (filteredUsers.length === 0) {
        tbody.innerHTML = '';
        noUsersMessage.style.display = 'block';
        return;
    }
    
    noUsersMessage.style.display = 'none';
    
    tbody.innerHTML = filteredUsers.map(user => `
        <tr>
            <td>${user.id}</td>
            <td>${escapeHtml(user.name)}</td>
            <td>${escapeHtml(user.email)}</td>
            <td><span class="role-badge role-${user.role}">${user.role}</span></td>
            <td><span class="status-badge status-${user.status}">${user.status}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-sm btn-success" onclick="editUser(${user.id})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deleteUser(${user.id})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function filterUsersList(filter) {
    switch(filter) {
        case 'active':
            return allUsers.filter(user => user.status === 'active');
        case 'inactive':
            return allUsers.filter(user => user.status === 'inactive');
        case 'admin':
            return allUsers.filter(user => user.role === 'admin');
        default:
            return allUsers;
    }
}

function filterUsers(filter) {
    currentFilter = filter;
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    displayUsers(filter);
}

function updateStatistics() {
    const stats = {
        total: allUsers.length,
        active: allUsers.filter(u => u.status === 'active').length,
        admin: allUsers.filter(u => u.role === 'admin').length,
        inactive: allUsers.filter(u => u.status === 'inactive').length
    };
    
    document.getElementById('totalUsers').textContent = stats.total;
    document.getElementById('activeUsers').textContent = stats.active;
    document.getElementById('adminUsers').textContent = stats.admin;
    document.getElementById('inactiveUsers').textContent = stats.inactive;
}

function editUser(id) {
    const user = allUsers.find(u => u.id === id);
    if (!user) return;
    
    document.getElementById('editId').value = user.id;
    document.getElementById('editName').value = user.name;
    document.getElementById('editEmail').value = user.email;
    document.getElementById('editRole').value = user.role;
    document.getElementById('editStatus').value = user.status;
    
    document.getElementById('editModal').style.display = 'block';
}

function updateUser() {
    const id = document.getElementById('editId').value;
    const user = {
        name: document.getElementById('editName').value.trim(),
        email: document.getElementById('editEmail').value.trim(),
        role: document.getElementById('editRole').value,
        status: document.getElementById('editStatus').value
    };
    
    if (!user.name || !user.email || !user.role || !user.status) {
        showToast('Please fill in all required fields', 'error');
        return;
    }
    
    if (!validateEmail(user.email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }
    
    fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update user');
        }
        return response.json();
    })
    .then(data => {
        showToast('User updated successfully!', 'success');
        closeEditModal();
        loadUsers();
    })
    .catch(error => {
        console.error('Error updating user:', error);
        showToast('Error updating user. Please try again.', 'error');
    });
}

function deleteUser(id) {
    if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
        return;
    }
    
    fetch(`${API}/${id}`, {
        method: "DELETE"
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete user');
        }
        return response.text();
    })
    .then(data => {
        showToast('User deleted successfully!', 'success');
        loadUsers();
    })
    .catch(error => {
        console.error('Error deleting user:', error);
        showToast('Error deleting user. Please try again.', 'error');
    });
}

function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
}

function clearForm() {
    document.getElementById('userForm').reset();
}

function testAPI() {
    const method = document.getElementById('apiMethod').value;
    const body = document.getElementById('apiBody').value;
    const responseElement = document.getElementById('apiResponse');
    
    let url = API;
    let options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    
    switch(method) {
        case 'GET':
            url = API;
            break;
        case 'GET_ACTIVE':
            url = `${API}/active`;
            break;
        case 'POST':
            url = API;
            options.method = 'POST';
            if (body) {
                try {
                    options.body = body;
                } catch(e) {
                    responseElement.textContent = 'Invalid JSON in request body';
                    return;
                }
            }
            break;
        case 'PUT':
            const putId = prompt('Enter user ID for PUT request:');
            if (!putId) return;
            url = `${API}/${putId}`;
            options.method = 'PUT';
            if (body) {
                try {
                    options.body = body;
                } catch(e) {
                    responseElement.textContent = 'Invalid JSON in request body';
                    return;
                }
            }
            break;
        case 'DELETE':
            const deleteId = prompt('Enter user ID for DELETE request:');
            if (!deleteId) return;
            url = `${API}/${deleteId}`;
            options.method = 'DELETE';
            break;
    }
    
    responseElement.textContent = 'Loading...';
    
    fetch(url, options)
        .then(response => {
            const responseText = response.text();
            return responseText.then(text => ({
                status: response.status,
                statusText: response.statusText,
                body: text
            }));
        })
        .then(result => {
            const formattedResponse = `Status: ${result.status} ${result.statusText}\n\nResponse Body:\n${result.body}`;
            responseElement.textContent = formattedResponse;
            
            if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
                setTimeout(loadUsers, 500);
            }
        })
        .catch(error => {
            responseElement.textContent = `Error: ${error.message}`;
        });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

function showLoading(show) {
    console.log(show ? 'Loading...' : 'Loading complete');
}

function showToast(message, type = 'info') {
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 3000);
}

function addSampleData() {
    const sampleUsers = [
        { name: "John Doe", email: "john@example.com", role: "admin", status: "active" },
        { name: "Jane Smith", email: "jane@example.com", role: "user", status: "active" },
        { name: "Bob Johnson", email: "bob@example.com", role: "manager", status: "inactive" },
        { name: "Alice Brown", email: "alice@example.com", role: "developer", status: "active" },
        { name: "Charlie Wilson", email: "charlie@example.com", role: "user", status: "pending" }
    ];
    
    sampleUsers.forEach(user => {
        fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).catch(console.error);
    });
    
    setTimeout(loadUsers, 1000);
    showToast('Sample data added! Refresh to see changes.', 'success');
}

document.addEventListener('DOMContentLoaded', function() {
});

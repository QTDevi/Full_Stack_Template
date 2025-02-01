# Full Stack Template  

A **full-stack web application template** using **React (Vite) + Tailwind CSS + shadcn/ui** for the frontend and **Django (Django REST Framework) + SQLite** for the backend. This template provides a clean, scalable, and modular setup to kickstart your full-stack projects.  

---

## **Features**  

✅ **Frontend:** React (Vite) + Tailwind CSS + shadcn/ui  
✅ **Backend:** Django + Django REST Framework  
✅ **Database:** SQLite for development (can be replaced with PosgreSQL)  
✅ **API Communication:** REST API with Fetch  
✅ **CORS Handling:** Allows frontend-backend interaction  
✅ **CRUD Operations:** Prebuilt API and UI for creating items  

---

## **Getting Started**  

### **Clone the Repository**  
```sh
git clone https://github.com/QTDevi/Full_Stack_Template.git
cd Full_Stack_Template
```

### **Backend Setup (Django API)**  
Go to **.env-template**, fill in information before starting and rename to **.env**

```
cd backend
python -m venv env
source env/bin/activate  # On Windows: env\Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

### **Frontend Setup (React + Tailwind CSS)**  
```
cd frontend
npm install
npm run dev
```
Frontend will be available at ```http://localhost:5173/```.

---

## API Endpoint

| Method | Endpoint          | Description       |
|--------|-------------------|-------------------|
| GET    | ```/api/items/``` | Fetch all items   |
| POST   | ```/api/items/``` | Create a new item |

---

## Project Structure
```
Full_Stack_Template/
│── backend/                # Django Backend
│   ├── myapp/              # Django App
│   ├── manage.py           # Django Management
│   ├── requirements.txt    # Backend Dependencies
│── frontend/               # React Frontend
│   ├── src/                # React Components
│   ├── public/             # Static Files
│   ├── index.html          # Main HTML
│── README.md               # Documentation
```

---

## Contributing

Feel free to change, modify, fork, reuse or whatever you want with this template project.

P.S. The project was designed as light-weight, so you might need to install a few packages

---

## License

This project has **no license** since it is the most basic connection between projects.


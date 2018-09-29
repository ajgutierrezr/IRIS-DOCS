define({ "api": [
  {
    "type": "get",
    "url": "/admin/doctors",
    "title": "List doctors (Admin)",
    "name": "ListDoctorsAdmin",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "none",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>List of all Doctors.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"links\": {\n    \"self\": \"http://localhost:3000/api/doctors/\"\n},\n\"data\": [\n    {\n        \"type\": \"Doctors\",\n        \"id\": 1,\n        \"links\": {\n            \"self\": \"http://localhost:3000/api/doctors/1\"\n        },\n        \"attributes\": {\n            \"email\": \"antomendoza8@gmail.com\",\n            \"rut\": \"12432542-2\",\n            \"first-name\": \"Doctora\",\n            \"last-name\": \"Corazon\",\n            \"photo\": \"url_a_foto\",\n            \"description\": \"A vers, quien es el dostor?\",\n            \"specialty\": \"Oftal\"\n        }\n    },\n    {\n        \"type\": \"Doctors\",\n        \"id\": 2,\n        \"links\": {\n            \"self\": \"http://localhost:3000/api/doctors/2\"\n        },\n        \"attributes\": {\n            \"email\": \"antoniamendo2@gmail.com\",\n            \"rut\": \"12432543-2\",\n            \"first-name\": \"Doctor\",\n            \"last-name\": \"House\",\n            \"photo\": \"url_a_foto\",\n            \"description\": \"El que cura tus heridas\",\n            \"specialty\": \"mologo\"\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>NotAuthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"error\": \"NotAuthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/admins.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/newdoctor",
    "title": "Add Doctor",
    "name": "NewDoctor",
    "group": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Firstname",
            "description": "<p>First name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Lastname",
            "description": "<p>Last name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Rut",
            "description": "<p>RUT</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Doctor",
            "description": "<p>added.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"doctor\": {\n        \"id\": 3,\n        \"Email\": \"mmmehech@iris.cl\",\n        \"FirstName\": \"Michell\",\n        \"LastName\": \"mehechh\",\n        \"Description\": \"Oftamologo de calidadd\",\n        \"Rut\": \"10897881-33\",\n        \"updatedAt\": \"2018-09-29T16:40:20.169Z\",\n        \"createdAt\": \"2018-09-29T16:40:20.169Z\",\n        \"Photo\": null,\n        \"Specialty\": null\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>NotAuthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"error\": \"NotAuthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/admins.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/auth",
    "title": "Authentification",
    "name": "Authentification",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Access Token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7IkVtYWlsIjoiY2V5emFndWlycmUzQHVjLmNsIiwiUGFzc3dvcmQiOiIkMmIkMDQkSm11ejVaOFJQaS90SGVBbEhtRDNZLkExYlEveVQ3amRvZEIuTnJNZDNFaXVxQ053cXZrcWEiLCJVc2VyVHlwZSI6IlBhdGllbnQiLCJjcmVhdGVkQXQiOiIyMDE4LTA5LTI3VDE4OjU2OjU1Ljc2N1oiLCJ1cGRhdGVkQXQiOiIyMDE4LTA5LTI3VDE4OjU2OjU1Ljc2N1oifSwiaWF0IjoxNTM4MDc2MzEyfQ.jAjqw2j6afFokIAp4AE-Khne3YW-o1ZZjE6iUgDWek0\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>NotAuthorized Wrong Email or Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"error\": \"Wrong email or password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/usertype",
    "title": "UserType",
    "name": "User_Type",
    "group": "Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "none",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User",
            "description": "<p>Type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    admin\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>NotAuthorized Wrong token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"error\": \"Wrong token\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/auth.js",
    "groupTitle": "Auth"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_ajgut_Desktop_2018_2_Grupo5_Backend_src_routes_doc_main_js",
    "groupTitle": "C__Users_ajgut_Desktop_2018_2_Grupo5_Backend_src_routes_doc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/doctors/:id/chats",
    "title": "Doctor chatlist",
    "name": "DoctorChats",
    "group": "Doctors",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "none",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>List of all Doctors.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    chatlist\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>NotFound</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"NotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/doctors.js",
    "groupTitle": "Doctors"
  },
  {
    "type": "get",
    "url": "/doctors",
    "title": "List doctors",
    "name": "ListDoctors",
    "group": "Doctors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "none",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>List of all Doctors.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"links\": {\n    \"self\": \"http://localhost:3000/api/doctors/\"\n},\n\"data\": [\n    {\n        \"type\": \"Doctors\",\n        \"id\": 1,\n        \"links\": {\n            \"self\": \"http://localhost:3000/api/doctors/1\"\n        },\n        \"attributes\": {\n            \"email\": \"antomendoza8@gmail.com\",\n            \"rut\": \"12432542-2\",\n            \"first-name\": \"Doctora\",\n            \"last-name\": \"Corazon\",\n            \"photo\": \"url_a_foto\",\n            \"description\": \"A vers, quien es el dostor?\",\n            \"specialty\": \"Oftal\"\n        }\n    },\n    {\n        \"type\": \"Doctors\",\n        \"id\": 2,\n        \"links\": {\n            \"self\": \"http://localhost:3000/api/doctors/2\"\n        },\n        \"attributes\": {\n            \"email\": \"antoniamendo2@gmail.com\",\n            \"rut\": \"12432543-2\",\n            \"first-name\": \"Doctor\",\n            \"last-name\": \"House\",\n            \"photo\": \"url_a_foto\",\n            \"description\": \"El que cura tus heridas\",\n            \"specialty\": \"mologo\"\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>NotAuthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"error\": \"NotAuthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/doctors.js",
    "groupTitle": "Doctors"
  },
  {
    "type": "get",
    "url": "/doctors/:id",
    "title": "Show doctor",
    "name": "ShowDoctor",
    "group": "Doctors",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "none",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>List of all Doctors.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"links\": {\n        \"self\": \"http://localhost:3000/api/doctors/all:id\"\n    },\n    \"data\": {\n        \"type\": \"Doctors\",\n        \"id\": 1,\n        \"attributes\": {\n            \"email\": \"ceyzaguirre3@uc.cl\",\n            \"first-name\": \"Cristobal\",\n            \"last-name\": \"eyzaguirre\",\n            \"specialty\": ,oftmg\n            \"description\": null\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>NotFound</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"NotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/doctors.js",
    "groupTitle": "Doctors"
  },
  {
    "type": "get",
    "url": "/patients/new",
    "title": "Create patient",
    "name": "CreatePatient",
    "group": "Patients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Firstname",
            "description": "<p>First name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Lastname",
            "description": "<p>Last name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Rut",
            "description": "<p>RUT</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Patient",
            "description": "<p>added.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n \"patient\": {\n     \"id\": 2,\n     \"Email\": \"cri.eyza@gmail.com\",\n     \"FirstName\": \"Cristobal\",\n     \"LastName\": \"Eyzaguirre\",\n     \"Description\": \"un paciente gravemente herido\",\n     \"Rut\": \"19323255-8\",\n     \"updatedAt\": \"2018-09-29T16:12:25.590Z\",\n     \"createdAt\": \"2018-09-29T16:12:25.590Z\",\n     \"Photo\": null,\n     \"PaymentInfo\": null\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>NotAuthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"error\": \"Validation Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/patients.js",
    "groupTitle": "Patients"
  },
  {
    "type": "get",
    "url": "/patients/chatdetail/:id",
    "title": "List messages",
    "name": "ListMessages",
    "group": "Patients",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "none",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Patient",
            "description": "<p>Messages.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    [{\"_id\":1,\"createdAt\":\"2018-09-28T21:06:57.809Z\",\"user\":{\"_id\":1,\"name\":\"Doctora Corazon\",\"avatar\":\"url_a_foto\"},\"text\":\"Hola mensaje 1\"},{\"_id\":2,\"createdAt\":\"2018-09-28T21:06:57.809Z\",\"user\":{\"_id\":1,\"name\":\"Doctora Corazon\",\"avatar\":\"url_a_foto\"},\"text\":\"Hola mensaje 2\"}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>NotAuthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"error\": \"Validation Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/patients.js",
    "groupTitle": "Patients"
  },
  {
    "type": "get",
    "url": "/patients/all",
    "title": "List patients",
    "name": "ListPatients",
    "group": "Patients",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "none",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>of Patients.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    patient\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>NotAuthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"error\": \"Validation Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/patients.js",
    "groupTitle": "Patients"
  },
  {
    "type": "get",
    "url": "/patients/chats",
    "title": "List chats",
    "name": "List_chats",
    "group": "Patients",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "none",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Patient",
            "description": "<p>Chats.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"links\": {\n        \"self\": \"http://localhost:3000/api/patients/all:id\"\n    },\n    \"data\": {\n        \"type\": \"Patients\",\n        \"id\": 1,\n        \"attributes\": {\n            \"email\": \"ceyzaguirre3@uc.cl\",\n            \"rut\": \"19323255-8\",\n            \"first-name\": \"Cristobal\",\n            \"last-name\": \"eyzaguirre\",\n            \"photo\": null,\n            \"description\": null\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>NotAuthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"error\": \"Validation Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/patients.js",
    "groupTitle": "Patients"
  },
  {
    "type": "get",
    "url": "/patients/chatdetail/:id",
    "title": "Patient Id",
    "name": "PatientId",
    "group": "Patients",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "none",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Patient",
            "description": "<p>Id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>NotAuthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n  \"error\": \"Validation Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/patients.js",
    "groupTitle": "Patients"
  },
  {
    "type": "get",
    "url": "/patients/new",
    "title": "Show patient",
    "name": "ShowPatient",
    "group": "Patients",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "none",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Patient",
            "description": "<p>details.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    patient\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>NotFound</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"Patient Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/patients.js",
    "groupTitle": "Patients"
  }
] });

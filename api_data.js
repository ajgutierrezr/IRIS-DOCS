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
          "content": "HTTP/1.1 200 OK\n[{\"id\":1,\"Email\":\"antomendoza8@gmail.com\",\"Rut\":\"12432542-2\",\"FirstName\":\"Doctora\",\"LastName\":\"Corazon\",\"Photo\":\"url_a_foto\",\"Description\":\"A vers, quien es el dostor?\",\"Specialty\":\"Oftal\",\"createdAt\":\"2018-09-29T16:25:16.530Z\",\"updatedAt\":\"2018-09-29T16:25:16.530Z\"},{\"id\":2,\"Email\":\"antoniamendo2@gmail.com\",\"Rut\":\"12432543-2\",\"FirstName\":\"Doctor\",\"LastName\":\"House\",\"Photo\":\"url_a_foto\",\"Description\":\"El que cura tus heridas\",\"Specialty\":\"mologo\",\"createdAt\":\"2018-09-29T16:25:16.530Z\",\"updatedAt\":\"2018-09-29T16:25:16.530Z\"},{\"id\":3,\"Email\":\"emasasaidasd@test\",\"Rut\":\"12312311-1\",\"FirstName\":\"Doctor\",\"LastName\":\"House\",\"Photo\":null,\"Description\":\"lalala\",\"Specialty\":null,\"createdAt\":\"2018-09-29T16:33:12.989Z\",\"updatedAt\":\"2018-09-29T16:33:12.989Z\"},{\"id\":4,\"Email\":\"drlight@capcom.jp\",\"Rut\":\"12345678-9\",\"FirstName\":\"Thomas\",\"LastName\":\"Light\",\"Photo\":null,\"Description\":\"I'll find Dr. WAHWEE\",\"Specialty\":null,\"createdAt\":\"2018-09-29T20:22:50.850Z\",\"updatedAt\":\"2018-09-29T20:22:50.850Z\"},{\"id\":5,\"Email\":\"drwily@capcom.jp\",\"Rut\":\"12345678-9\",\"FirstName\":\"Wily\",\"LastName\":\"E.\",\"Photo\":null,\"Description\":\"Muahaha\",\"Specialty\":null,\"createdAt\":\"2018-09-29T20:28:47.481Z\",\"updatedAt\":\"2018-09-29T20:28:47.481Z\"},{\"id\":6,\"Email\":\"test1@uc.cl\",\"Rut\":\"1234\",\"FirstName\":\"Dr. Test\",\"LastName\":\"1\",\"Photo\":null,\"Description\":\"test web newDoctor 1\",\"Specialty\":null,\"createdAt\":\"2018-09-29T20:33:30.826Z\",\"updatedAt\":\"2018-09-29T20:33:30.826Z\"},{\"id\":7,\"Email\":\"test2@uc.cl\",\"Rut\":\"5678\",\"FirstName\":\"Dr. Test\",\"LastName\":\"2\",\"Photo\":null,\"Description\":\"Test web newDoctor 2\",\"Specialty\":null,\"createdAt\":\"2018-09-29T20:35:29.725Z\",\"updatedAt\":\"2018-09-29T20:35:29.725Z\"},{\"id\":8,\"Email\":\"test3@uc.cl\",\"Rut\":\"1234\",\"FirstName\":\"Dr. Test\",\"LastName\":\"3\",\"Photo\":null,\"Description\":\"test 3 Doc\",\"Specialty\":null,\"createdAt\":\"2018-09-29T20:38:15.726Z\",\"updatedAt\":\"2018-09-29T20:38:15.726Z\"},{\"id\":9,\"Email\":\"test4@uc.cl\",\"Rut\":\"1234\",\"FirstName\":\"Dr. test\",\"LastName\":\"4\",\"Photo\":null,\"Description\":\"test web 4 newDoctor\",\"Specialty\":null,\"createdAt\":\"2018-09-29T20:39:49.405Z\",\"updatedAt\":\"2018-09-29T20:39:49.405Z\"},{\"id\":10,\"Email\":\"emasasaidasd@test2\",\"Rut\":\"12312311-1\",\"FirstName\":\"Doctor\",\"LastName\":\"House\",\"Photo\":null,\"Description\":\"lalala\",\"Specialty\":null,\"createdAt\":\"2018-09-29T22:28:22.396Z\",\"updatedAt\":\"2018-09-29T22:28:22.396Z\"}]",
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
          "content": "HTTP/1.1 200 OK\n{\"id\":10,\"Email\":\"emasasaidasd@test2\",\"FirstName\":\"Doctor\",\"LastName\":\"House\",\"Description\":\"lalala\",\"Rut\":\"12312311-1\",\"updatedAt\":\"2018-09-29T22:28:22.396Z\",\"createdAt\":\"2018-09-29T22:28:22.396Z\",\"Photo\":null,\"Specialty\":null}",
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
          "content": "    HTTP/1.1 200 OK\n    {\n    [{\"id\":2,\"Topic\":\"dolor de cara\",\"Open\":true,\"updatedAt\":\"2018-09-29T16:25:16.541Z\",\"Diagnosis\":null,\"DoctorId\":1},{\"id\":3,\"Topic\":\"Ojo rojo\",\"Open\":true,\"updatedAt\":\"2018-09-29T19:38:49.722Z\",\"Diagnosis\":null,\"DoctorId\":1},{\"id\":4,\"Topic\":\"Ojo rojo\",\"Open\":true,\"updatedAt\":\"2018-09-29T21:31:00.984Z\",\"Diagnosis\":null,\"DoctorId\":1},{\"id\":5,\"Topic\":\"Ojo rojo\",\"Open\":true,\"updatedAt\":\"2018-09-29T21:31:38.761Z\",\"Diagnosis\":null,\"DoctorId\":1},{\"id\":6,\"Topic\":\"Ojo rojo\",\"Open\":true,\"updatedAt\":\"2018-09-29T21:34:17.805Z\",\"Diagnosis\":null,\"DoctorId\":1},{\"id\":7,\"Topic\":\"K\",\"Open\":false,\"updatedAt\":\"2018-09-29T21:39:01.071Z\",\"Diagnosis\":null,\"DoctorId\":1},{\"id\":8,\"Topic\":\"\",\"Open\":false,\"updatedAt\":\"2018-09-29T21:41:55.393Z\",\"Diagnosis\":null,\"DoctorId\":1},{\"id\":9,\"Topic\":\"\",\"Open\":false,\"updatedAt\":\"2018-09-29T21:47:11.530Z\",\"Diagnosis\":null,\"DoctorId\":1},{\"id\":10,\"Topic\":\"\",\"Open\":false,\"updatedAt\":\"2018-09-29T21:53:30.449Z\",\"Diagnosis\":null,\"DoctorId\":1},{\"id\":11,\"Topic\":\"\",\"Open\":false,\"updatedAt\":\"2018-09-29T21:55:38.180Z\",\"Diagnosis\":null,\"DoctorId\":1},{\"id\":12,\"Topic\":\"\",\"Open\":false,\"updatedAt\":\"2018-09-29T21:56:22.163Z\",\"Diagnosis\":null,\"DoctorId\":1},{\"id\":13,\"Topic\":\"\",\"Open\":false,\"updatedAt\":\"2018-09-29T21:56:32.615Z\",\"Diagnosis\":null,\"DoctorId\":1},{\"id\":14,\"Topic\":\"\",\"Open\":false,\"updatedAt\":\"2018-09-29T21:56:36.934Z\",\"Diagnosis\":null,\"DoctorId\":1},{\"id\":15,\"Topic\":\"\",\"Open\":false,\"updatedAt\":\"2018-09-29T21:56:38.570Z\",\"Diagnosis\":null,\"DoctorId\":1},{\"id\":16,\"Topic\":\"\",\"Open\":false,\"updatedAt\":\"2018-09-29T21:56:59.292Z\",\"Diagnosis\":null,\"DoctorId\":1},{\"id\":17,\"Topic\":\"\",\"Open\":false,\"updatedAt\":\"2018-09-29T21:57:32.606Z\",\"Diagnosis\":null,\"DoctorId\":1},{\"id\":18,\"Topic\":\"\",\"Open\":false,\"updatedAt\":\"2018-09-29T21:57:33.153Z\",\"Diagnosis\":null,\"DoctorId\":1},{\"id\":19,\"Topic\":\"\",\"Open\":false,\"updatedAt\":\"2018-09-29T21:58:00.272Z\",\"Diagnosis\":null,\"DoctorId\":1},{\"id\":20,\"Topic\":\"\",\"Open\":false,\"updatedAt\":\"2018-09-29T21:58:49.075Z\",\"Diagnosis\":null,\"DoctorId\":1},{\"id\":21,\"Topic\":\"Topic\",\"Open\":false,\"updatedAt\":\"2018-09-29T22:01:09.216Z\",\"Diagnosis\":null,\"DoctorId\":1},{\"id\":23,\"Topic\":\"Yeah\",\"Open\":false,\"updatedAt\":\"2018-09-29T22:03:54.503Z\",\"Diagnosis\":null,\"DoctorId\":1},{\"id\":24,\"Topic\":\"Ojo rojo\",\"Open\":true,\"updatedAt\":\"2018-09-29T22:15:40.952Z\",\"Diagnosis\":null,\"DoctorId\":1},{\"id\":26,\"Topic\":\"Hola\",\"Open\":false,\"updatedAt\":\"2018-09-29T22:31:03.691Z\",\"Diagnosis\":null,\"DoctorId\":1},{\"id\":27,\"Topic\":\"asfbafb\",\"Open\":false,\"updatedAt\":\"2018-09-29T22:32:32.440Z\",\"Diagnosis\":null,\"DoctorId\":1}]\n}",
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
          "content": "HTTP/1.1 200 OK\n{\n[{\"id\":1,\"Email\":\"antomendoza8@gmail.com\",\"Rut\":\"12432542-2\",\"FirstName\":\"Doctora\",\"LastName\":\"Corazon\",\"Photo\":\"url_a_foto\",\"Description\":\"A vers, quien es el dostor?\",\"Specialty\":\"Oftal\",\"createdAt\":\"2018-09-29T16:25:16.530Z\",\"updatedAt\":\"2018-09-29T16:25:16.530Z\"},{\"id\":2,\"Email\":\"antoniamendo2@gmail.com\",\"Rut\":\"12432543-2\",\"FirstName\":\"Doctor\",\"LastName\":\"House\",\"Photo\":\"url_a_foto\",\"Description\":\"El que cura tus heridas\",\"Specialty\":\"mologo\",\"createdAt\":\"2018-09-29T16:25:16.530Z\",\"updatedAt\":\"2018-09-29T16:25:16.530Z\"},{\"id\":3,\"Email\":\"emasasaidasd@test\",\"Rut\":\"12312311-1\",\"FirstName\":\"Doctor\",\"LastName\":\"House\",\"Photo\":null,\"Description\":\"lalala\",\"Specialty\":null,\"createdAt\":\"2018-09-29T16:33:12.989Z\",\"updatedAt\":\"2018-09-29T16:33:12.989Z\"},{\"id\":4,\"Email\":\"drlight@capcom.jp\",\"Rut\":\"12345678-9\",\"FirstName\":\"Thomas\",\"LastName\":\"Light\",\"Photo\":null,\"Description\":\"I'll find Dr. WAHWEE\",\"Specialty\":null,\"createdAt\":\"2018-09-29T20:22:50.850Z\",\"updatedAt\":\"2018-09-29T20:22:50.850Z\"},{\"id\":5,\"Email\":\"drwily@capcom.jp\",\"Rut\":\"12345678-9\",\"FirstName\":\"Wily\",\"LastName\":\"E.\",\"Photo\":null,\"Description\":\"Muahaha\",\"Specialty\":null,\"createdAt\":\"2018-09-29T20:28:47.481Z\",\"updatedAt\":\"2018-09-29T20:28:47.481Z\"},{\"id\":6,\"Email\":\"test1@uc.cl\",\"Rut\":\"1234\",\"FirstName\":\"Dr. Test\",\"LastName\":\"1\",\"Photo\":null,\"Description\":\"test web newDoctor 1\",\"Specialty\":null,\"createdAt\":\"2018-09-29T20:33:30.826Z\",\"updatedAt\":\"2018-09-29T20:33:30.826Z\"},{\"id\":7,\"Email\":\"test2@uc.cl\",\"Rut\":\"5678\",\"FirstName\":\"Dr. Test\",\"LastName\":\"2\",\"Photo\":null,\"Description\":\"Test web newDoctor 2\",\"Specialty\":null,\"createdAt\":\"2018-09-29T20:35:29.725Z\",\"updatedAt\":\"2018-09-29T20:35:29.725Z\"},{\"id\":8,\"Email\":\"test3@uc.cl\",\"Rut\":\"1234\",\"FirstName\":\"Dr. Test\",\"LastName\":\"3\",\"Photo\":null,\"Description\":\"test 3 Doc\",\"Specialty\":null,\"createdAt\":\"2018-09-29T20:38:15.726Z\",\"updatedAt\":\"2018-09-29T20:38:15.726Z\"},{\"id\":9,\"Email\":\"test4@uc.cl\",\"Rut\":\"1234\",\"FirstName\":\"Dr. test\",\"LastName\":\"4\",\"Photo\":null,\"Description\":\"test web 4 newDoctor\",\"Specialty\":null,\"createdAt\":\"2018-09-29T20:39:49.405Z\",\"updatedAt\":\"2018-09-29T20:39:49.405Z\"}]",
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
          "content": " HTTP/1.1 200 OK\n{\"id\":1,\"Email\":\"antomendoza8@gmail.com\",\"Rut\":\"12432542-2\",\"FirstName\":\"Doctora\",\"LastName\":\"Corazon\",\"Photo\":\"url_a_foto\",\"Description\":\"A vers, quien es el dostor?\",\"Specialty\":\"Oftal\",\"createdAt\":\"2018-09-29T16:25:16.530Z\",\"updatedAt\":\"2018-09-29T16:25:16.530Z\"}",
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
          "content": "HTTP/1.1 200 OK\n{\"id\":11,\"Email\":\"ejemplo@uc.cl\",\"FirstName\":\"Anto\",\"LastName\":\"Rojas\",\"Description\":\"soy una niña bueno\",\"Rut\":\"19213121-4\",\"updatedAt\":\"2018-09-29T22:26:07.926Z\",\"createdAt\":\"2018-09-29T22:26:07.926Z\",\"Photo\":null,\"PaymentInfo\":null}",
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
          "content": "HTTP/1.1 200 OK\n[{\"_id\":1,\"createdAt\":\"2018-09-29T16:25:16.548Z\",\"user\":{\"_id\":1,\"name\":\"Doctora Corazon\",\"avatar\":\"url_a_foto\"},\"text\":\"Hola mensaje 1\"},{\"_id\":2,\"createdAt\":\"2018-09-29T16:25:16.548Z\",\"user\":{\"_id\":1,\"name\":\"Doctora Corazon\",\"avatar\":\"url_a_foto\"},\"text\":\"Hola mensaje 2\"}]",
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
          "content": "HTTP/1.1 200 OK\n[{\"id\":1,\"Email\":\"ceyzaguirre3@uc.cl\",\"Rut\":\"19323255-8\",\"FirstName\":\"Cristobal\",\"LastName\":\"eyzaguirre\",\"Photo\":null,\"Description\":null,\"createdAt\":\"2018-09-29T16:25:16.536Z\",\"updatedAt\":\"2018-09-29T16:25:16.536Z\"},{\"id\":2,\"Email\":\"sguerra2@uc.cl\",\"Rut\":\"18768845-0\",\"FirstName\":\"seba\",\"LastName\":\"guerra\",\"Photo\":null,\"Description\":\"Nuevo usuario\",\"createdAt\":\"2018-09-29T16:36:41.442Z\",\"updatedAt\":\"2018-09-29T16:36:41.442Z\"},{\"id\":3,\"Email\":\"sguerra3@uc.cl\",\"Rut\":\"18768845-0\",\"FirstName\":\"s\",\"LastName\":\"g\",\"Photo\":null,\"Description\":\"Nuevo usuario\",\"createdAt\":\"2018-09-29T16:39:32.255Z\",\"updatedAt\":\"2018-09-29T16:39:32.255Z\"},{\"id\":4,\"Email\":\"sguerra4@uc.cl\",\"Rut\":\"18768845-2\",\"FirstName\":\"sebs\",\"LastName\":\"guerra\",\"Photo\":null,\"Description\":\"Nuevo usuario\",\"createdAt\":\"2018-09-29T16:39:50.467Z\",\"updatedAt\":\"2018-09-29T16:39:50.467Z\"},{\"id\":5,\"Email\":\"sguerra6@uc.cl\",\"Rut\":\"18768845-6\",\"FirstName\":\"sebs\",\"LastName\":\"guerra\",\"Photo\":null,\"Description\":\"Nuevo usuario\",\"createdAt\":\"2018-09-29T16:47:34.852Z\",\"updatedAt\":\"2018-09-29T16:47:34.852Z\"},{\"id\":6,\"Email\":\"sguerra7@uc.cl\",\"Rut\":\"18768845-7\",\"FirstName\":\"seba\",\"LastName\":\"guerra\",\"Photo\":null,\"Description\":\"Nuevo usuario\",\"createdAt\":\"2018-09-29T16:52:45.799Z\",\"updatedAt\":\"2018-09-29T16:52:45.799Z\"},{\"id\":7,\"Email\":\"ejemplo8@uc.cl\",\"Rut\":\"19213121-4\",\"FirstName\":\"Anto\",\"LastName\":\"Rojas\",\"Photo\":null,\"Description\":\"soy una niña bueno\",\"createdAt\":\"2018-09-29T18:26:38.699Z\",\"updatedAt\":\"2018-09-29T18:26:38.699Z\"},{\"id\":8,\"Email\":\"\",\"Rut\":\"12345678-K\",\"FirstName\":\"Cris\",\"LastName\":\"Gaz\",\"Photo\":null,\"Description\":\"Nuevo usuario\",\"createdAt\":\"2018-09-29T19:53:24.180Z\",\"updatedAt\":\"2018-09-29T19:53:24.180Z\"},{\"id\":9,\"Email\":\"Test@test.cl\",\"Rut\":\"12345678-K\",\"FirstName\":\"Cris\",\"LastName\":\"Gaz\",\"Photo\":null,\"Description\":\"Nuevo usuario\",\"createdAt\":\"2018-09-29T19:56:07.895Z\",\"updatedAt\":\"2018-09-29T19:56:07.895Z\"},{\"id\":10,\"Email\":\"ejemplo4@uc.cl\",\"Rut\":\"19213121-4\",\"FirstName\":\"Anto\",\"LastName\":\"Rojas\",\"Photo\":null,\"Description\":\"soy una niña bueno\",\"createdAt\":\"2018-09-29T20:18:06.243Z\",\"updatedAt\":\"2018-09-29T20:18:06.243Z\"},{\"id\":11,\"Email\":\"ejemplo@uc.cl\",\"Rut\":\"19213121-4\",\"FirstName\":\"Anto\",\"LastName\":\"Rojas\",\"Photo\":null,\"Description\":\"soy una niña bueno\",\"createdAt\":\"2018-09-29T22:26:07.926Z\",\"updatedAt\":\"2018-09-29T22:26:07.926Z\"}]",
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
          "content": "HTTP/1.1 200 OK\n[{\"doctor\":{\"id\":2,\"name\":\"Doctor House\",\"avatar\":\"url_a_foto\"},\"topic\":\"dolor de ojo\",\"open\":true,\"last_date\":\"2018-09-29T16:25:16.541Z\",\"id\":1,\"messages\":[{\"_id\":1,\"createdAt\":\"2018-09-29T16:25:16.548Z\",\"user\":{\"_id\":1,\"name\":\"Doctora Corazon\",\"avatar\":\"url_a_foto\"},\"text\":\"Hola mensaje 1\"},{\"_id\":2,\"createdAt\":\"2018-09-29T16:25:16.548Z\",\"user\":{\"_id\":1,\"name\":\"Doctora Corazon\",\"avatar\":\"url_a_foto\"},\"text\":\"Hola mensaje 2\"}]},{\"doctor\":{\"id\":1,\"name\":\"Doctora Corazon\",\"avatar\":\"url_a_foto\"},\"topic\":\"dolor de cara\",\"open\":true,\"last_date\":\"2018-09-29T16:25:16.541Z\",\"id\":2,\"messages\":[]},{\"doctor\":{\"id\":1,\"name\":\"Doctora Corazon\",\"avatar\":\"url_a_foto\"},\"topic\":\"Ojo rojo\",\"open\":true,\"last_date\":\"2018-09-29T19:38:49.722Z\",\"id\":3,\"messages\":[]},{\"doctor\":{\"id\":1,\"name\":\"Doctora Corazon\",\"avatar\":\"url_a_foto\"},\"topic\":\"Ojo rojo\",\"open\":true,\"last_date\":\"2018-09-29T21:31:00.984Z\",\"id\":4,\"messages\":[]},{\"doctor\":{\"id\":1,\"name\":\"Doctora Corazon\",\"avatar\":\"url_a_foto\"},\"topic\":\"Ojo rojo\",\"open\":true,\"last_date\":\"2018-09-29T21:31:38.761Z\",\"id\":5,\"messages\":[]},{\"doctor\":{\"id\":1,\"name\":\"Doctora Corazon\",\"avatar\":\"url_a_foto\"},\"topic\":\"Ojo rojo\",\"open\":true,\"last_date\":\"2018-09-29T21:34:17.805Z\",\"id\":6,\"messages\":[]},{\"doctor\":{\"id\":1,\"name\":\"Doctora Corazon\",\"avatar\":\"url_a_foto\"},\"topic\":\"Ojo rojo\",\"open\":true,\"last_date\":\"2018-09-29T22:15:40.952Z\",\"id\":24,\"messages\":[]},{\"doctor\":{\"id\":1,\"name\":\"Doctora Corazon\",\"avatar\":\"url_a_foto\"},\"topic\":\"Ojo rojo\",\"open\":true,\"last_date\":\"2018-09-29T23:01:18.131Z\",\"id\":34,\"messages\":[]}]",
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
    "title": "New Chat",
    "name": "NewChat",
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
            "type": "JSON",
            "optional": false,
            "field": "Doctor",
            "description": "<p>Name</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "Patient",
            "description": "<p>Id</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "Topic",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "OpeningDate",
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
            "field": "Chat.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\"chat\":{\"id\":34,\"Topic\":\"Ojo rojo\",\"Open\":true,\"OpeningDate\":\"2018-09-29T23:01:18.131Z\",\"DoctorId\":1,\"PatientId\":1,\"updatedAt\":\"2018-09-29T23:01:18.131Z\",\"createdAt\":\"2018-09-29T23:01:18.131Z\",\"ClosingDate\":null,\"Diagnosis\":null}}",
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
    "title": "Patient Details",
    "name": "PatientDetails",
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
          "content": "HTTP/1.1 200 OK\n{\"id\":1,\"Email\":\"ceyzaguirre3@uc.cl\",\"Rut\":\"19323255-8\",\"FirstName\":\"Cristobal\",\"LastName\":\"eyzaguirre\",\"Photo\":null,\"Description\":null,\"createdAt\":\"2018-09-29T16:25:16.536Z\",\"updatedAt\":\"2018-09-29T16:25:16.536Z\"}",
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

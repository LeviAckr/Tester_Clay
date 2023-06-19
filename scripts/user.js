var ids = [1, 2, 3, 4, 5];
var id = prompt("Digite seu ID");

if (ids.includes(parseInt(id))) {
  console.log("Seu ID está presente no array.");
} else {
    history.back();
}


const json = {
  "ids": [
    {
      "id": 1,
      "nome": "Sombra",
      "email": "cartman@example.com",
      "permissions": "dono"
    },
    {
      "id": 2,
      "nome": "Gabs",
      "email": "cartman@example.com",
      "permissions": "dev"
    },
    {
      "id": 3,
      "nome": "Jotinha",
      "email": "cartman@example.com",
      "permissions": "dev"
    },
    {
      "id": 4,
      "nome": "Bags",
      "email": "cartman@example.com",
      "permissions": "admin"
    },
    {
      "id": 5,
      "nome": "platina",
      "email": "cartman@example.com",
      "permissions": "admin"
    }
  ]
};

function checkPermission(id) {
  const item = json.ids.find(item => item.id === id);
  if (item) {
    console.log(`Permissão para o ID ${id}: ${item.permissions}`);
  } else {
    console.log(`ID ${id} não encontrado.`);
  }
}

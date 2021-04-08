// var req = await fetch("https://www.universal-tutorial.com/api/getaccesstoken", {
//       method: "GET",
//       headers: {
//         "Accept": "application/json",
//         "api-token": "7ubL1nt2Ac68fhrYZWIajdM0pnzb52hjZPP19_WjPX38vugLg_bX4BZMIuv_vRQhjK0",
//         "user-email": "arthurreisataide@gmail.com"
//       }
//     });
//     req.json().then(data => {
//       console.log(data)
//     })

export const getData = async (path) => {
  try {
    let req = await fetch("https://www.universal-tutorial.com/api/" + path, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJhcnRodXJyZWlzYXRhaWRlQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6Ijd1YkwxbnQyQWM2OGZocllaV0lhamRNMHBuemI1MmhqWlBQMTlfV2pQWDM4dnVnTGdfYlg0QlpNSXV2X3ZSUWhqSzAifSwiZXhwIjoxNjE3OTczODA2fQ.1dl6g0EwE8teSxcrmnXAYRuFgavOvlpxEMP1g4FrPxE"
      }
    });
    if(req){
      return req.json();
    }
  } catch(e) {}
}

// const data = [
//     {name: "Argentina", 
//       states: [
//         {name: "test", 
//           cities: [{name: 'test'}]
//         },
//       ]
//     },
//     {name: "Australia", 
//       states: [
//         {name: "test", 
//           cities: [{name: 'test'}]
//         },
//       ]
//     },
//     {name: "Bolivia", 
//       states: [
//         {name: "test", 
//           cities: [{name: 'test'}]
//         },
//       ]
//     },
//     {name: "Brazil", 
//       states: [
//         {name: "test", 
//           cities: [{name: 'test'}]
//         },
//       ]
//     },
//     {name: "Canada", 
//       states: [
//         {name: "test", 
//           cities: [{name: 'test'}]
//         },
//       ]
//     },
//     {name: "Chile", 
//       states: [
//         {name: "test", 
//           cities: [{name: 'test'}]
//         },
//       ]
//     },
//     {name: "China", 
//       states: [
//         {name: "test", 
//           cities: [{name: 'test'}]
//         },
//       ]
//     },
//     {name: "Croatia", 
//       states: [
//         {name: "test", 
//           cities: [{name: 'test'}]
//         },
//       ]
//     },
//     {name: "France", 
//       states: [
//         {name: "test", 
//           cities: [{name: 'test'}]
//         },
//       ]
//     },
//     {name: "Germany", 
//       states: [
//         {name: "test", 
//           cities: [{name: 'test'}]
//         },
//       ]
//     },
//     {name: "Netherlands", 
//       states: [
//         {name: "test", 
//           cities: [{name: 'test'}]
//         },
//       ]
//     },
//   ]

// // This is page to the tickets

// import 'package:flutter/material.dart';
// import 'package:real_estate/views/widgets/ticket_widgets.dart';
// import 'package:real_estate/models/ticket_model.dart';
// import 'package:real_estate/models/ticket.api.dart';
// import 'dart:developer';

// import 'package:real_estate/route/route.dart'as route  ;

// class TicketPage extends StatefulWidget {
//   @override
//   _TicketPageState createState() => _TicketPageState();
// }

// class _TicketPageState extends State<TicketPage> {

// // class TicketPage extends StatefulWidget {
// //   // final int args;

// //   // const TicketPage({Key? key, required this.args}) : super(key: key);


// //   @override
// //   _TicketPageState createState() => _TicketPageState();
// // }

// // class _TicketPageState extends State<TicketPage> {



//   // get the arguments from the route
//   // final args = ModalRoute.of(context)!.settings.arguments as Map;
//   // final int id = args['id'];



//   // final int id ; 
//   // _TicketPageState({required this.id});

  

//   List<Ticket> tickets = [];
//   bool _isLoading = true;


//   @override
//   void initState() {
//     super.initState();
//     getTickets();
//   }

//  // get the arguments from the route
//   // final Map arguments = ModalRoute.of(context).settings.arguments as Map;
//   // final int id = arguments['id'];



//   Future<void> getTickets() async {
//     // tickets = await TicketApi.getTickets(id);
//     log ('get tickets');
//     // log (widget.args.toString());
//     print ('get tickets');
//     tickets = await TicketApi.getTickets(2);
//     setState(() {
//       _isLoading = false;
//     });
//   }



//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: Row (
//           mainAxisAlignment: MainAxisAlignment.center,
//           children: <Widget>[
//             // Add an icon warning to the widget
//             Icon(Icons.warning),
//             SizedBox(width: 10,),
//             // add a text to the widget
//             Text('Tickets'),
//           ],
        
//       ),
//       ),
      

//       bottomNavigationBar: BottomAppBar(
//         child: Row(
//           mainAxisAlignment: MainAxisAlignment.spaceAround,
//           children: <Widget>[
//             // Search page
//             IconButton(
//               onPressed: () {
//                 Navigator.pushNamed(context, route.searchTicketRoute);
//               },
//               icon: Icon(Icons.search),
//             ),
//             // Login page
//             IconButton(
//               onPressed: () {
//                 Navigator.pushNamed(context, '/login');
//               },
//               icon: Icon(Icons.login),
//             ),

//             // homme page
  
//             IconButton(
//               onPressed: () {
//                 Navigator.pushNamed(context, '/');
//               },
//               icon: Icon(Icons.home),
//             ),
//             ],
//         ),
//       ),


    
//       body: _isLoading ? Center(child: CircularProgressIndicator()) : ListView.builder(
//         itemCount: tickets.length,
//         itemBuilder: (context, index) {
//           return TicketCard(
//             ticket_Id: tickets[index].ticket_Id,
//             appart_Id: tickets[index].appart_Id,
//             title: tickets[index].title,
//             description: tickets[index].description,
//             status: tickets[index].status,
            
            
//           );

//         },
//       ),
//     );
//   }
// }


// This is page to the tickets

import 'package:flutter/material.dart';
import 'package:real_estate/views/widgets/ticket_widgets.dart';
import 'package:real_estate/models/ticket.dart';
import 'package:real_estate/models/ticket.api.dart';
import 'dart:developer';

class TicketPage extends StatefulWidget {
  @override
  _TicketPageState createState() => _TicketPageState();
}

class _TicketPageState extends State<TicketPage> {

  List<Ticket> tickets = [];
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    getTickets();
  }



  Future<void> getTickets() async {
    tickets = await TicketApi.getTickets();
    setState(() {
      _isLoading = false;
    });
  }



  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Row (
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            // Add an icon warning to the widget
            Icon(Icons.warning),
            SizedBox(width: 10,),
            // add a text to the widget
            Text('Tickets'),
          ],
        
      ),
      ),
      

      bottomNavigationBar: BottomAppBar(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: <Widget>[
            IconButton(
              onPressed: () {
                Navigator.pushNamed(context, '/searchAppartement');
              },
              icon: Icon(Icons.search),
            ),
            IconButton(
              onPressed: () {
                Navigator.pushNamed(context, '/login');
              },
              icon: Icon(Icons.login),
            ),
            ],
        ),
      ),


    
      body: _isLoading ? Center(child: CircularProgressIndicator()) : ListView.builder(
        itemCount: tickets.length,
        itemBuilder: (context, index) {
          return TicketCard(
            ticket_Id: tickets[index].ticket_Id,
            title: tickets[index].title,
            description: tickets[index].description,
            status: tickets[index].status,
            appartementId: tickets[index].appartementId,
            
          );

        },
      ),
    );
  }
}

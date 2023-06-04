// This page is used to search for a ticket ID and display the ticket details

import 'package:flutter/material.dart';
import 'package:real_estate/models/appartement.dart';
import 'package:real_estate/models/appartement.api.dart';
import 'package:real_estate/route/route.dart' as route;
import 'package:real_estate/models/ticket.api.dart';

class SearchTicketIDPage extends StatefulWidget {
  @override
  _SearchTicketIDPageState createState() => _SearchTicketIDPageState();
}


class _SearchTicketIDPageState extends State<SearchTicketIDPage> {
  final _formKey = GlobalKey<FormState>();
  final _scaffoldKey = GlobalKey<ScaffoldState>();
  bool _isLoading = false;

  // Create a controller for each field
  final _ticketIDController = TextEditingController();

  @override
  void dispose() {
    _ticketIDController.dispose();
    super.dispose();
  }

  Future<void> _searchTicketID() async {
    if (_formKey.currentState!.validate()) {
      setState(() {
        _isLoading = true;
      });
      final int appartement_id = int.parse (_ticketIDController.text);

      final bool result = await TicketApi.getTickets(appartement_id) != null;
      setState(() {
        _isLoading = false;
      });
      final String message =
          result ? 'Your ticket has been found' : 'Error';
  
      _scaffoldKey.currentState!.showSnackBar(
        SnackBar(
          content: Text(message),
          duration: Duration(seconds: 3),
        ),
      );
      Navigator.pushNamed(context, route.ticketRoute, arguments: appartement_id);

    }
  }


  

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      appBar: AppBar(title: Text('Search Ticket of an appartement')),
      bottomNavigationBar: BottomAppBar(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: <Widget>[

            IconButton(
              onPressed: () {
                Navigator.pushNamed(context, route.loginRoute);
              },
              icon: Icon(Icons.login),
            ),
            IconButton(
              onPressed: () {
                Navigator.pushNamed(context, route.homePage);
              },
              icon: Icon(Icons.home),
            ),
            
          ]
        ),
      ),


      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: ListView(
            children: [
              TextFormField(
                controller: _ticketIDController,
                decoration: InputDecoration(
                  labelText: 'Ticket ID',
                ),
                validator: (value) {
                  if (value!.isEmpty) {
                    return 'Please enter a ticket ID';
                  }
                  return null;
                },
              ),
              SizedBox(height: 16.0),
              _isLoading
                  ? Center(child: CircularProgressIndicator())
                  : ElevatedButton(
                      child: Text('Search'),
                      onPressed: () {
                        _searchTicketID();
                  },
                    ),
            ],
          ),
        ),
      ),
    );
  }
}
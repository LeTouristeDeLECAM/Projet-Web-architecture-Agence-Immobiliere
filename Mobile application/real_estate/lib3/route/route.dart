import 'package:flutter/material.dart';

import 'package:real_estate/views/home.dart';
import 'package:real_estate/views/ticket.dart';
import 'package:real_estate/views/login.dart';
import 'package:real_estate/views/addAppart.dart';
import 'package:real_estate/views/editAppart.dart';
import 'package:real_estate/models/appartement.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:shared_preferences/shared_preferences.dart';





const id = 1;
// Route Names

const String homePage = '/';
const String ticketRoute = '/appartement/$id/ticket';
const String loginRoute = '/login';
const String addAppartementRoute = '/addAppartement';
const String editAppartementRoute = '/editAppartement/$id';
const String searchTicketRoute = '/searchTicket/$id';


// token to pass to the route


// Controller for the routes

Route<dynamic> controller(RouteSettings settings) {

  // final Object id = settings.arguments;
  final id = settings.arguments.toString();



  // convert id into a int
  // var id2 = int.parse('$id');
  

  print ('The argument id in route file is :$id');
  


  switch (settings.name) {
    case homePage:
      return MaterialPageRoute(builder: (context) => HomePage());
    case ticketRoute:
      return MaterialPageRoute(builder: (context) => TicketPage(id: id,));
    case loginRoute:
      return MaterialPageRoute(builder: (context) => LoginPage());
    case addAppartementRoute:
      return MaterialPageRoute(builder: (context) => AddAppartementPage());
    case editAppartementRoute:
      final Appartement appartement = {

        'appart_Id': id,
        'title': 'title',
        'description': 'description',
        'price': 100,
        'surface': 100,
        'nbRooms': 100,
        'address': 'address',
        'image': 'image',
        'createdAt': 'createdAt',
        'updatedAt': 'updatedAt',
        'userId': 'userId',
      } as Appartement;

      return MaterialPageRoute(builder: (context) => EditAppartementPage(appartement:appartement , ));
    default:
      throw ('Route not found');
  }
}
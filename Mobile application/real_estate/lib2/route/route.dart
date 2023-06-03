import 'dart:developer';

import 'package:flutter/material.dart';

import 'package:real_estate/views/home.dart';
import 'package:real_estate/views/ticket.dart';
import 'package:real_estate/views/login.dart';
import 'package:real_estate/views/addAppart.dart';
import 'package:real_estate/views/editAppart.dart';




const id = 1;
// Route Names

const String homePage = '/';
const String ticketRoute = '/appartement/$id/ticket';
const String loginRoute = '/login';
const String addAppartementRoute = '/addAppartement';
const String editAppartementRoute = '/editAppartement/$id';
const String searchTicketRoute = '/searchTicket/$id';


// Controller for the routes

Route<dynamic> controller(RouteSettings settings) {
  // transform the arguments to int
  final int id = int.parse(settings.arguments.toString());
  final args = settings.arguments.toString();
  print ('route');
  print(args);
  log(args.toString());

  switch (settings.name) {
    case homePage:
      return MaterialPageRoute(builder: (context) => HomePage());
    // case ticketRoute:
    //   // return MaterialPageRoute(builder: (context) => TicketPage( args: id));
    //   return MaterialPageRoute(builder: (context) => TicketPage( ));
    case loginRoute:
      return MaterialPageRoute(builder: (context) => LoginPage());
    // case addAppartementRoute:
    //   return MaterialPageRoute(builder: (context) => AddAppartementPage());
    // case editAppartementRoute:
    //   return MaterialPageRoute(builder: (context) => EditAppartementPage());
    default:
      throw ('Route not found');
  }
}
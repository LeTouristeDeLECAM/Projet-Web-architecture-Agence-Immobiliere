import 'package:flutter/material.dart';
import 'package:real_estate/views/home.dart';
import 'package:real_estate/views/ticket.dart';
import 'route/route.dart'as route  ;


void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Real Estate Agency App',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
      
        primarySwatch: Colors.yellow,
      ),
    
     

      onGenerateRoute: route.controller,
      // initialRoute: route.loginRoute,
      initialRoute: route.homePage,


    );
  }
}

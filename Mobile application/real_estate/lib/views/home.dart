// Home page of the real estate agency app

import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Row (
          children: <Widget>[
            // add an image to the widget
            //Image.asset('../real_estate/lib/views/Logo_ECAM.jpg', fit: BoxFit.contain, height: 32),
            // Add an icon house to the widget
            Icon(Icons.house),
            // add a text to the widget
            Text('Real Estate Agency App'),
            // Container(
            //   padding: const EdgeInsets.all(8.0), child: Text('Agence Immobilière'))
          ],
        
      ),
      ),
    );
  }
}
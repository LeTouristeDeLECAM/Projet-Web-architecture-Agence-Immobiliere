// Home page of the real estate agency app

import 'package:flutter/material.dart';
import 'package:real_estate/views/widgets/appartement_widgets.dart';
import 'package:real_estate/models/appartement.dart';
import 'package:real_estate/models/appartement.api.dart';


class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {

  List<Appartement> appartements = [];
  bool _isLoading = true;

  Future getAppartements() async {
    appartements = await AppartementApi.getAppartements();
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
            // Add an icon house to the widget
            Icon(Icons.house),
            SizedBox(width: 10,),
            // add a text to the widget
            Text('Real Estate Agency App'),
          ],
        
      ),
      ),
      body: _isLoading ? Center(child: CircularProgressIndicator(),) : ListView.builder(
        itemCount: appartements.length,
        itemBuilder: (context, index) {
          return AppartementCard(
            title: appartements[index].title,
            description: appartements[index].description,
            price: appartements[index].price,
            surface: appartements[index].surface,
            nbRooms: appartements[index].nbRooms,
            address: appartements[index].address,
          );
        },
      ),
    );
  }
}
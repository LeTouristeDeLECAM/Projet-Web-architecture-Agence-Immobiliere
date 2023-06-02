// Home page of the real estate agency app

import 'package:flutter/material.dart';
import 'package:real_estate/views/widgets/appartement_widgets.dart';
import 'package:real_estate/models/appartement.dart';
import 'package:real_estate/models/appartement.api.dart';
import 'dart:developer';



class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {

  List<Appartement> appartements = [];
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    getAppartements();
  }



  Future<void> getAppartements() async {
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
      

      
      // floatingActionButton: FloatingActionButton(
      //   onPressed: () {
      //     getAppartements();
      //   },
      //   child: Icon(Icons.refresh),
      // ),

      // Add a list of appartements to the widget
      // floatingActionButton: FloatingActionButton(
      //   onPressed: () {
      //     // addAppartement();
      //     Navigator.pushNamed(context, '/addAppartement');

      //   },
      //   child: Icon(Icons.add),
      // ),

      // buttons to serch for appartement and login
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
            IconButton(onPressed: () {
              Navigator.pushNamed(context, '/addAppartement');
            }, icon: Icon(Icons.add)),

            // refresh button
            IconButton(onPressed: () {
              getAppartements();
            }, icon: Icon(Icons.refresh)),
          ],
        ),
      ),


      body: _isLoading ? Center(child: CircularProgressIndicator(),) : ListView.builder(
        itemCount: appartements.length,
        itemBuilder: (context, index) {
          return AppartementCard(
            appart_Id: appartements[index].appart_Id,
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
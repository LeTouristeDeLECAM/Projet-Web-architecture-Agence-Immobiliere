// In this file, we define the Appartement class
// based on the API https://app.swaggerhub.com/apis/LeTouristeDeLECAM/Agence_Immobiliere/1.0

class Appartement {
  final int appart_Id;
  final String title;
  final String description;
  final int price;
  final int surface;
  final int nbRooms;
  final String address;

  Appartement({
    required this.appart_Id,
    required this.title,
    required this.description,
    required this.price,
    required this.surface,
    required this.nbRooms,
    required this.address
  });

  factory Appartement.fromJson(Map<String, dynamic> json) {
    return Appartement(
      appart_Id: json['appart_Id'],
      title: json['title'],
      description: json['description'],
      price: json['price'],
      surface: json['surface'],
      nbRooms: json['nbRooms'],
      address: json['address'],
    );
  }


static List<Appartement> appartementsFromSnapshot(List snapshot) {
    return snapshot.map((data) {
      return Appartement.fromJson(data);
    }).toList();
  }

@override
  String toString() {
    return 'Appartement{appart_Id: $appart_Id, title: $title, description: $description, price: $price, surface: $surface, nbRooms: $nbRooms, address: $address}';
  }

}
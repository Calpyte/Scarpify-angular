import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  step: number = 0;
  selectedIds: any = [];
  users: any = [
    {
      id: 'seller',
      name: 'Seller',
      icon: 'person'
    },
    {
      id: 'buyer',
      name: 'Buyer',
      icon: 'store'
    }
  ];

  categories: any = [
    {
      "id": "645cd55f1d18620f9c30810b",
      "name": "Paper",
      "icon": "paper.png",
      "products": [
        {
          "id": "0919d4cc-efe9-11ed-a05b-0242ac120003",
          "name": "Kraft paper",
          "icon": "kraft_paper.png",
          "deleted": false
        },
        {
          "id": "5da3d27c-efe9-11ed-a05b-0242ac120003",
          "name": "Newspapers",
          "icon": "newspapers.png",
          "deleted": false
        },
        {
          "id": "5da3d27c-efe9-11ed-a05b-0242ac120018",
          "name": "High-grade papers",
          "icon": "high-grade_papers.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-0242ac120014",
          "name": "Mixed papers",
          "icon": "mixed_papers.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-0242ac120015",
          "name": "waxed paper",
          "icon": "waxed_paper.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-0242ac120016",
          "name": "shredded paper",
          "icon": "shredded_paper.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-0242ac120017",
          "name": "wrapping gift paper",
          "icon": "wrapping_gift_paper.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-0242ac120018",
          "name": "plastic-coated paper",
          "icon": "plastic-coated_paper.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-0242ac120019",
          "name": "receipts",
          "icon": "receipts.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-0242ac120020",
          "name": "sticky paper",
          "icon": "sticky_paper.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-0242ac120021",
          "name": "milk",
          "icon": "milk.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-0242ac120022",
          "name": "napkins",
          "icon": "napkins.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-0242ac120023",
          "name": "paper towel",
          "icon": "paper_towel.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-0242ac120024",
          "name": "toilet paper",
          "icon": "toilet_paper.png",
          "deleted": false
        }
      ],
      "deleted": false
    },
    {
      "id": "645cd9091d18620f9c30810c",
      "name": "Card Board",
      "icon": "card_board.png",
      "products": [
        {
          "id": "0919d4cc-efe9-11ed-a05b-ajjidyt5",
          "name": "Corrugated fiberboard",
          "icon": "corrugated_fiberboard.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-ddffffuwi4",
          "name": "Single-face board",
          "icon": "single-face_board.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-aksjdhdhu76",
          "name": "Single-wall board",
          "icon": "single-wall_board.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-quirrmo9",
          "name": "Double-wall board",
          "icon": "double-wall_board.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-sfdjkku5",
          "name": "Triple-wall board",
          "icon": "triple-wall_board.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-grggghjkk5",
          "name": "Honeycomb cardboard",
          "icon": "honeycomb_cardboard.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-ghuioog7",
          "name": "Paperboard",
          "icon": "paperboard.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-fgjkhklkl8",
          "name": "Grey paperboard and grey cardboard",
          "icon": "grey_paperboard_and_grey_cardboard.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-ffkll9098",
          "name": "Mat board",
          "icon": "mat_board.png",
          "deleted": false
        }
      ],
      "deleted": false
    },
    {
      "id": "645cdad81d18620f9c30810d",
      "name": "Plastic",
      "icon": "plastic.png",
      "products": [
        {
          "id": "0919d4cc-efe9-11ed-a05b-ghe5r5dsrwt",
          "name": "Polyethylene Terephthalate",
          "icon": "polyethylene_Terephthalate.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-gcj5rt6yuy",
          "name": "High-Density Polyethylene",
          "icon": "high-Density_Polyethylene.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-hj7uy565ry",
          "name": "Polyvinyl Chloride",
          "icon": "polyvinyl_Chloride.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-gtu68767ir5",
          "name": "Polypropylene",
          "icon": "polypropylene.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-shp87456e3",
          "name": "Polystyrene",
          "icon": "polystyrene.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-gkl7895s7",
          "name": "miscellaneous Plastics",
          "icon": "miscellaneous_Plastics.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-sad1467t5",
          "name": "Polycarbonate",
          "icon": "polycarbonate.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a05b-df47809d2",
          "name": "Polyamide",
          "icon": "polyamide.png",
          "deleted": false
        }
      ],
      "deleted": false
    },
    {
      "id": "645cdb7f1d18620f9c30810e",
      "name": "Plastic Cover",
      "icon": "plastic_Cover.png",
      "products": [
        {
          "id": "0919d4cc-efe9-11ed-a01b-sgfm3098h1",
          "name": "Low-density polyethylene",
          "icon": "low-density_polyethylene.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a02b-mno8106s7",
          "name": "Linear Low-Density Polyethylene",
          "icon": "linear_Low-Density_Polyethylene.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a03b-azc0941f9",
          "name": "Ultra Low-Density Polyethylene",
          "icon": "ultra_Low-Density_Polyethylene.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a04b-cvg7542n0",
          "name": "Medium-density polyethylene",
          "icon": "medium-density_polyethylene.png",
          "deleted": false
        }
      ],
      "deleted": false
    },
    {
      "id": "645ce8b9fe3ba85731074e86",
      "name": "Metal",
      "icon": "metal.png",
      "products": [
        {
          "id": "0919d4cc-efe9-11ed-a01b-bcgf6982j7",
          "name": "Iron",
          "icon": "iron.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-sdda8912t5",
          "name": "Steel",
          "icon": "steel.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-dfrt7345t9",
          "name": "Aluminium",
          "icon": "aluminium.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-cvui4509k4",
          "name": "Copper",
          "icon": "copper.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-vtui1040u8",
          "name": "Brass",
          "icon": "brass.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-fjuy3709t5",
          "name": "Gold",
          "icon": "gold.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-fhji7422y7",
          "name": "Nickel",
          "icon": "nickel.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-nzqp0041ss9",
          "name": "Tin",
          "icon": "tin.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-bcbc1436k4",
          "name": "Lead",
          "icon": "lead.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-ghlo6120i7",
          "name": "Zinc",
          "icon": "zinc.png",
          "deleted": false
        }
      ],
      "deleted": false
    },
    {
      "id": "645ce8edfe3ba85731074e87",
      "name": "Rubber",
      "icon": "rubber.png",
      "products": [
        {
          "id": "0919d4cc-efe9-11ed-a01b-sdgk4098k1",
          "name": "Butyl Rubber",
          "icon": "butyl_rubber.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-vbmi4714u5",
          "name": "Tyre",
          "icon": "tyre.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-dlca0401y7",
          "name": "Latex Rubber",
          "icon": "latex_rubber.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-gigf1090t5",
          "name": "Inner Tube",
          "icon": "inner_tuber.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-bcip3101t8",
          "name": "Rubber Tube",
          "icon": "rubber_tube.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-piqe8164j6",
          "name": "Rubber Tyres",
          "icon": "rubber_tyres.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-bytr0904a9",
          "name": "EPS",
          "icon": "ePS.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-ourt1566q5",
          "name": "Latex",
          "icon": "latex.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-dfvi8956f4",
          "name": "Butyl Inner Tube",
          "icon": "Butyl_inner_tube.png",
          "deleted": false
        }
      ],
      "deleted": false
    },
    {
      "id": "645ce91dfe3ba85731074e88",
      "name": "Glass",
      "icon": "glass.png",
      "products": [
        {
          "id": "0919d4cc-efe9-11ed-a01b-fkop5007g6",
          "name": "Beer Bottle",
          "icon": "beer_bttle.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-viva1100y7",
          "name": "Soft Drink Bottle",
          "icon": "soft_drink_bottle.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-adio7104u6",
          "name": "Wine and Liquor Bottle",
          "icon": "wine_and_liquor_bottle.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-dklo90457d3",
          "name": "Bottles and Jars for Food",
          "icon": "bottles_and_jars_for_food.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-sazc174e8",
          "name": "Cosmetic Bottle",
          "icon": "cosmetic_bottle.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-veqw8833l0",
          "name": "Chemical Bottle",
          "icon": "chemical_bottle.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-fuio4867f3",
          "name": "Electronic Light Glass",
          "icon": "electronic_light_glass.png",
          "deleted": false
        }
      ],
      "deleted": false
    },
    {
      "id": "645cea0ffe3ba85731074e89",
      "name": "Household Waste",
      "icon": "household_waste.png",
      "products": [
        {
          "id": "0919d4cc-efe9-11ed-a01b-byio4455h5",
          "name": "Mixed Plastic",
          "icon": "mixed_plastic.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-vnko9080g1",
          "name": "Mixed Paper",
          "icon": "mixed_paper.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-asfj2440j0",
          "name": "Mixed Glass",
          "icon": "mixed_glass.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-wili7612a7",
          "name": "Mixed Metal",
          "icon": "mixed_metal.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-vcbi5000y2",
          "name": "Mixed Rubber",
          "icon": "mixed_rubber.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-ghkl8850d4",
          "name": "Mixed Plastic Cover",
          "icon": "mixed_plastic_cover.png",
          "deleted": false
        }
      ],
      "deleted": false
    },
    {
      "id": "645ceaf7fe3ba85731074e8a",
      "name": "Packaging",
      "icon": "packaging.png",
      "products": [
        {
          "id": "0919d4cc-efe9-11ed-a01b-bewr1357c4",
          "name": "Tetra packet",
          "icon": "tetra_packet.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-gloy5021v8",
          "name": "Thermocol",
          "icon": "thermocol.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-mcha0920l1",
          "name": "Bubble Cover",
          "icon": "bubble_cover.png",
          "deleted": false
        }
      ],
      "deleted": false
    },
    {
      "id": "645ceb89fe3ba85731074e8b",
      "name": "E-waste",
      "icon": "e-waste.png",
      "products": [
        {
          "id": "0919d4cc-efe9-11ed-a01b-splw2075f3",
          "name": "Solar Panal",
          "icon": "solar_panal.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-fkjk8262g4",
          "name": "Mixed E-waste",
          "icon": "mixed_e-waste.png",
          "deleted": false
        }
      ],
      "deleted": false
    },
    {
      "id": "645cf846fe3ba85731074e8c",
      "name": "General",
      "icon": "general.png",
      "products": [
        {
          "id": "0919d4cc-efe9-11ed-a01b-nafi6893g4",
          "name": "Paper",
          "icon": "paper.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-klpo8521l9",
          "name": "Magazine",
          "icon": "magazine.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-dlkq10954q2",
          "name": "Plastic",
          "icon": "plastic.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-vcbo88421w3",
          "name": "Plastic Carry bag",
          "icon": "plastic_carry_bag.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-akil4070f4",
          "name": "Cloth",
          "icon": "cloth.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-muve9649l9",
          "name": "Metal",
          "icon": "metal.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-glow7090t9",
          "name": "Wire",
          "icon": "wire.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-sxlx85436m3",
          "name": "Mixed",
          "icon": "mixed.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-boso2268t6",
          "name": "Bag",
          "icon": "bag.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-gult1957n7",
          "name": "Belt",
          "icon": "belt.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-kltr94786h6",
          "name": "Leather",
          "icon": "leather.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-urli4500a2",
          "name": "Rubber",
          "icon": "rubber.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-ambi5739t8",
          "name": "Glass bottles",
          "icon": "glass_bottles.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-fvio748992d4",
          "name": "Wood",
          "icon": "wood.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-fkli8047y6",
          "name": "Pvc Pipe",
          "icon": "pvc_pipe.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-ktro7403b7",
          "name": "Ruffia or sack",
          "icon": "ruffia_or_sack.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-hotu74367u8",
          "name": "Jute Bag",
          "icon": "jute_bag.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-fgwe740349n7",
          "name": "Thermocol",
          "icon": "thermocol.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-ssdy6002c9",
          "name": "Toys",
          "icon": "toys.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-fkjo0033w0",
          "name": "Home Appliances",
          "icon": "home_appliances.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-facz5576g5",
          "name": "Mobile",
          "icon": "mobile.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-biio4910z1",
          "name": "Laptop",
          "icon": "laptop.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-fhht7788u2",
          "name": "Printer",
          "icon": "printer.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-tuuy6741q4",
          "name": "Kitchen Vessels",
          "icon": "kitchen_vessels.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-jjsw36989t5",
          "name": "Tablet cover",
          "icon": "Tablet cover.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-dszc8090k4",
          "name": "E-waste-",
          "icon": "e-waste-.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-njij5040t3",
          "name": "Bubble Cover",
          "icon": "bubble_cover.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-ansu4567o5",
          "name": "Card board",
          "icon": "card_board.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-dout8945g8",
          "name": "Tetra packet",
          "icon": "tetra_packet.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-mytr97843b7",
          "name": "Coconut shell",
          "icon": "coconut_shell.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-fufu4070f3",
          "name": "Note book",
          "icon": "note_book.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-byvi0241s7",
          "name": "Thread",
          "icon": "thread.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-html9944m6",
          "name": "Rope",
          "icon": "rope.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-vuwu3322n8",
          "name": "Garden Hose",
          "icon": "garden_hose.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-adgu984756i8",
          "name": "Tooth paste",
          "icon": "tooth_paste.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-gsrt6047l9",
          "name": "Toilet use plastics",
          "icon": "toilet_use_plastics.png",
          "deleted": false
        },
        {
          "id": "0919d4cc-efe9-11ed-a01b-sewr0330y8",
          "name": " Coconut husk",
          "icon": " coconut_husk.png",
          "deleted": false
        }
      ],
      "deleted": false
    }
  ]

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      userType: ['seller'],
      firstName: ['', [Validators.required]],
      lastName: [''],
      businessType: [''],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[1-9]{1}[0-9]{9}$')]],
      otp: [''],
      address: [''],
      location: [''],
      products: [''],
    })
  }

  selectedLocation = (event) => {
    this.registerForm.patchValue({
      location: event
    })
  }

  getSelectedProducts = () => {
    let arr = [];
    this.categories.forEach((category) => {
      let products = [...category?.products];
      let obj = {
        id: category?.id,
        name: category?.name,
        icon: category?.icon,
        products: products.filter((product) => this.selectedIds.includes(product?.id))
      };
      arr.push(obj);
    });
    this.registerForm.patchValue({
      products: arr.filter((e) => e?.products?.length > 0)
    })
  }

  handleUserType = (userType: string) => {
    this.registerForm.patchValue({
      userType: userType
    });
  }

  handleForward = () => {
    if (this.step === 6) {
      this.getSelectedProducts();
      this.step = this.step + 1;
    } else {
      if (this.step === 7) {
        this.submit();
      } else {
        this.step = this.step + 1;
      }

    }
  }

  handleBackward = () => {
    this.step = this.step - 1;
  }

  onOtpChange(e: any) {
    this.registerForm.patchValue({
      otp: e
    })
  }

  submit = () => {
    this.dialogRef.close(null);
    console.log(this.registerForm.value);
  }

  close = (data) => {
    this.dialogRef.close(data);
  }

}

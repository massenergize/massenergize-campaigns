import { useState } from "react";
import { AdminLayout } from "../../../layouts/admin-layout";
import { StartCampaign } from "../../create-campaign/start-campaign";
import { CampaignDetailsAndPreview } from "../../create-campaign/campaign-details-and-preview";
import { useNamedState } from "../../../hooks/useNamedState";
import useSWR from "swr";
import { fetchAllPartners, fetchCampaignEvents, fetchCampaignTechnologies } from "../../../requests/campaign-requests";
import { fetchCommunitiesList } from "../../../requests/community-routes";

const { useReducer } = require("react");

let initialState = {
  "stats": {
    "shares": [
      {
        "utm_medium": "email",
        "count": 1
      },
      {
        "utm_medium": "Whatsapp",
        "count": 2
      }
    ],
    "likes": [
      {
        "technology": "Community Solar",
        "count": 1
      },
      {
        "technology": "Heat Pump",
        "count": 1
      }
    ],
    "views": [
      {
        "technology": "Change Name",
        "count": 1
      },
      {
        "technology": "Community Solar",
        "count": 2
      }
    ],
    "followers": [
      {
        "community": 24,
        "count": 5
      }
    ],
    "comments": [
      {
        "technology": "Community Solar",
        "count": 2
      }
    ],
    "testimonials": [
      {
        "technology": "Change Name",
        "count": 4
      },
      {
        "technology": "Community Solar",
        "count": 4
      },
      {
        "technology": "Heat Pump",
        "count": 3
      }
    ]
  },
  "id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
  "created_at": "2023-12-07T10:56:12.888Z",
  "updated_at": "2023-12-08T10:34:31.573Z",
  "is_deleted": false,
  "info": null,
  "account": {
    "id": "583c96c5-7fb4-488f-ac54-2558252ae535"
  },
  "title": "Wayland Campaign",
  "description": "Helo there",
  "start_date": "2023-12-07",
  "end_date": null,
  "primary_logo": {
    "id": 620,
    "name": "PrimaryLogoFor Wayland Campaign Campaign",
    "url": "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png"
  },
  "secondary_logo": {
    "id": 621,
    "name": "SecondaryLogoFor Wayland Campaign Campaign",
    "url": "https://massenergize-files.s3.amazonaws.com/media/csu.jpeg"
  },
  "image": {
    "id": 631,
    "name": "ImageFor Wayland Campaign Campaign",
    "url": "https://massenergize-files.s3.amazonaws.com/media/pexels-pixabay-221012.jpg"
  },
  "is_approved": false,
  "is_published": false,
  "is_global": true,
  "is_template": false,
  "tagline": "Wayland and Acton Colab",
  "owner": "906d4df9-e7a7-4b75-b2c6-235796cab193",
  "key_contact": {
    "name": "Tahiru Abdullai",
    "email": "abdullai.tahiru+203@massenergize.org",
    "phone_number": "1286398612983",
    "image": {
      "id": 622,
      "name": "ImageFor-Wayland-Campaign-Campaign",
      "url": "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-12-07_at_8.38.00PM.png"
    }
  },
  "technologies": [
    {
      "campaign_technology_id": "5cd65137-6b1e-424e-b5b7-b3fcfaa935e2",
      "testimonials": [
        {
          "id": "7e586aa4-6885-44cc-a860-1daac65f2c0e",
          "created_at": "2023-12-07T12:56:17.504Z",
          "updated_at": "2023-12-08T08:59:14.907Z",
          "is_deleted": false,
          "info": null,
          "campaign": null,
          "campaign_technology": {
            "id": "5cd65137-6b1e-424e-b5b7-b3fcfaa935e2"
          },
          "title": "Testimonial  Ver Good",
          "body": "When using the double-underscore notation, you can chain relationships to navigate through multiple levels of ForeignKey relationships. For instance, if Author had a ForeignKey to another model, you could use 'author__another_related_model' in the prefetch_related call.",
          "is_approved": false,
          "image": {
            "id": 618,
            "name": "ImageFor Testimonial  Ver Good CampaignTech Testimonial",
            "url": "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png"
          },
          "created_by": "906d4df9-e7a7-4b75-b2c6-235796cab193",
          "is_published": false,
          "anonymous": false,
          "community": null,
          "user": {
            "id": "906d4df9-e7a7-4b75-b2c6-235796cab193",
            "full_name": "ME Tahiru",
            "preferred_name": "MET",
            "email": "abdullai.tahiru@massenergize.org"
          }
        },
        {
          "id": "4edc0d73-4e43-4a04-8d69-3ea1ab4ae735",
          "created_at": "2023-12-07T12:55:56.642Z",
          "updated_at": "2023-12-08T08:59:26.351Z",
          "is_deleted": false,
          "info": null,
          "campaign": null,
          "campaign_technology": {
            "id": "5cd65137-6b1e-424e-b5b7-b3fcfaa935e2"
          },
          "title": "Testimonial  101",
          "body": "When using the double-underscore notation, you can chain relationships to navigate through multiple levels of ForeignKey relationships. For instance, if Author had a ForeignKey to another model, you could use 'author__another_related_model' in the prefetch_related call.",
          "is_approved": false,
          "image": {
            "id": 617,
            "name": "ImageFor Testimonial  101 CampaignTech Testimonial",
            "url": "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png"
          },
          "created_by": "7f11c30e-e4a9-4cb5-94c6-a645ee901914",
          "is_published": false,
          "anonymous": false,
          "community": null,
          "user": {
            "id": "7f11c30e-e4a9-4cb5-94c6-a645ee901914",
            "full_name": "Tahiru kehillah",
            "preferred_name": "TahiruK",
            "email": "abdullai@kehillahglobal.com"
          }
        },
        {
          "id": "4e36c42c-79a1-468b-aaba-4610accd6b5a",
          "created_at": "2023-12-07T12:55:36.906Z",
          "updated_at": "2023-12-08T08:59:41.278Z",
          "is_deleted": false,
          "info": null,
          "campaign": null,
          "campaign_technology": {
            "id": "5cd65137-6b1e-424e-b5b7-b3fcfaa935e2"
          },
          "title": "Testimonial  101",
          "body": "When using the double-underscore notation, you can chain relationships to navigate through multiple levels of ForeignKey relationships. For instance, if Author had a ForeignKey to another model, you could use 'author__another_related_model' in the prefetch_related call.",
          "is_approved": false,
          "image": null,
          "created_by": "a744f543-4232-4a46-85f5-f78af86348ff",
          "is_published": true,
          "anonymous": false,
          "community": null,
          "user": {
            "id": "a744f543-4232-4a46-85f5-f78af86348ff",
            "full_name": "Tahiru Abdullai",
            "preferred_name": "tahiru",
            "email": "abdullai.tahiru@gmail.com"
          }
        }
      ],
      "events": [
        {
          "id": "4310cccb-39cf-422f-8b2d-d255ab7677a6",
          "created_at": "2023-12-07T17:11:15.700Z",
          "updated_at": "2023-12-07T17:11:15.700Z",
          "is_deleted": false,
          "info": null,
          "campaign": {
            "id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d"
          },
          "event": {
            "id": 99,
            "name": "New Event",
            "start_date": "2023-10-28T18:56:00Z",
            "end_date": "2023-10-29T18:56:00Z",
            "description": "<p>jshflkjshfgvlkhjfglksdjglkjsgdf</p>",
            "image": {
              "id": 604,
              "name": "ImageFor New Event Event",
              "url": "https://massenergize-files.s3.amazonaws.com/media/concord.png",
              "created_at": "2023-10-23T20:25:38.955Z",
              "info": {
                "size": "33785",
                "size_text": "34 KB",
                "copyright_att": "fg",
                "permission_key": "YES",
                "permission_notes": "Took the photo or made the image, or was given permission by the person who made the image",
                "has_copyright_permission": true
              }
            }
          }
        },
        {
          "id": "0933dbf4-bd72-4847-86c5-081bec7b87d7",
          "created_at": "2023-12-07T17:11:41.938Z",
          "updated_at": "2023-12-07T17:11:41.939Z",
          "is_deleted": false,
          "info": null,
          "campaign": {
            "id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d"
          },
          "event": {
            "id": 97,
            "name": "December Event",
            "start_date": "2023-09-29T09:48:00Z",
            "end_date": "2023-09-30T09:48:00Z",
            "description": "<p>A message has been sent from a community portal user to the Community Admin for Tachyon Community through the \"Contact Us\" page. This message is being sent to all Community Admins listed for Tachyon Community, and if possible should be responded to within 2-3 days, using the following link: View and respond to message</p>",
            "image": {
              "id": 598,
              "name": "ImageFor December Event Event",
              "url": "https://massenergize-files.s3.amazonaws.com/media/Farmers_Market.jpg"
            }
          }
        },
        {
          "id": "74308254-f97d-4210-b439-67429188f8f7",
          "created_at": "2023-12-07T17:11:37.947Z",
          "updated_at": "2023-12-07T17:11:37.947Z",
          "is_deleted": false,
          "info": null,
          "campaign": {
            "id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d"
          },
          "event": {
            "id": 98,
            "name": "Newly Tested Event",
            "start_date": "2023-08-30T10:59:00Z",
            "end_date": "2023-08-30T11:59:00Z",
            "description": "<p>Space may seem like the most obvious thing ever to an external observer. You hit the giant &lsquo;space&rsquo; button, space appears, as expected, and you move on. However, in reality, typing in spaces is quite tricky, and there are numerous ways of going around it in HTML. Pick the wrong.</p>\r\n<p>You have access to all the images that are in use in the communities you manage. Your library contains images that have either been uploaded by you, or other admins of your community. You may also see images that are not from any of your communities, but have been made public by admins of different communities</p>",
            "image": {
              "id": 598,
              "name": "ImageFor December Event Event",
              "url": "https://massenergize-files.s3.amazonaws.com/media/Farmers_Market.jpg"
            }
          }
        }
      ],
      "coaches": [
        {
          "id": "80c75c35-0aaa-4dfd-8977-1d3586711d24",
          "created_at": "2023-12-07T22:03:48.931Z",
          "updated_at": "2023-12-07T22:03:51.755Z",
          "is_deleted": false,
          "info": null,
          "technology": {
            "id": "4c74b279-45c4-435a-b05d-11f5f3dcd69d"
          },
          "full_name": "Faddal Ibrahim",
          "email": "xyz@wayland.com",
          "phone_number": "+233550751805",
          "image": {
            "id": 627,
            "name": "FileUpload for 80c75c35-0aaa-4dfd-8977-1d3586711d24 TechnologyCoach",
            "url": "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-12-07_at_8.38.00PM.png"
          },
          "community": "Wayland"
        },
        {
          "id": "400a32b6-a21e-414e-866b-c9c1306b1a6b",
          "created_at": "2023-12-07T22:04:36.144Z",
          "updated_at": "2023-12-07T22:04:42.609Z",
          "is_deleted": false,
          "info": null,
          "technology": {
            "id": "4c74b279-45c4-435a-b05d-11f5f3dcd69d"
          },
          "full_name": "Frimpong O.A",
          "email": "xyz@acton.com",
          "phone_number": "+233550751805",
          "image": {
            "id": 628,
            "name": "FileUpload for 400a32b6-a21e-414e-866b-c9c1306b1a6b TechnologyCoach",
            "url": "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png"
          },
          "community": "Acton"
        },
        {
          "id": "a337eedb-baef-49b9-a813-9afc5d25ad4b",
          "created_at": "2023-12-07T22:05:07.883Z",
          "updated_at": "2023-12-07T22:05:09.299Z",
          "is_deleted": false,
          "info": null,
          "technology": {
            "id": "4c74b279-45c4-435a-b05d-11f5f3dcd69d"
          },
          "full_name": "Samuel O.A",
          "email": "xyz@concord.com",
          "phone_number": "+233550751805",
          "image": {
            "id": 629,
            "name": "FileUpload for a337eedb-baef-49b9-a813-9afc5d25ad4b TechnologyCoach",
            "url": "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png"
          },
          "community": "Concord"
        }
      ],
      "campaign_id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
      "id": "4c74b279-45c4-435a-b05d-11f5f3dcd69d",
      "created_at": "2023-12-07T11:20:24.726Z",
      "updated_at": "2023-12-08T14:46:30.176Z",
      "is_deleted": false,
      "info": null,
      "name": "Community Solar",
      "description": "\"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?\"\r\n\r\nSection 1.10.33 of \"de Finibus Bonorum et Malorum\", written by Cicero in 45 BC\r\n\"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\"\r\n\r\n1914 translation by H. Rackham\r\n\"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.\"",
      "summary": "Allow GitHub, its affiliates and third parties to",
      "image": {
        "id": 611,
        "name": "FileUpload for 4c74b279-45c4-435a-b05d-11f5f3dcd69d Technology",
        "url": "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png"
      },
      "icon": null,
      "is_icon": false
    },
    {
      "campaign_technology_id": "7f194e30-9c4a-408b-a854-98a134aebaf3",
      "testimonials": [
        {
          "id": "5513358e-c091-423c-bdc3-afaf2bd864cb",
          "created_at": "2023-12-08T10:12:52.028Z",
          "updated_at": "2023-12-08T10:12:52.028Z",
          "is_deleted": false,
          "info": null,
          "campaign": {
            "id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d"
          },
          "campaign_technology": {
            "id": "7f194e30-9c4a-408b-a854-98a134aebaf3"
          },
          "title": "Way to go !!!",
          "body": "dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem., dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lore",
          "is_approved": true,
          "image": {
            "id": 629,
            "name": "FileUpload for a337eedb-baef-49b9-a813-9afc5d25ad4b TechnologyCoach",
            "url": "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png"
          },
          "created_by": "906d4df9-e7a7-4b75-b2c6-235796cab193",
          "is_published": true,
          "anonymous": false,
          "community": null,
          "user": {
            "id": "906d4df9-e7a7-4b75-b2c6-235796cab193",
            "full_name": "ME Tahiru",
            "preferred_name": "MET",
            "email": "abdullai.tahiru@massenergize.org"
          }
        },
        {
          "id": "e074d592-cbb3-49f6-9735-109f56e27155",
          "created_at": "2023-12-08T10:13:42.844Z",
          "updated_at": "2023-12-08T10:13:42.845Z",
          "is_deleted": false,
          "info": null,
          "campaign": null,
          "campaign_technology": {
            "id": "7f194e30-9c4a-408b-a854-98a134aebaf3"
          },
          "title": "Cool Things",
          "body": "dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lore. dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lore",
          "is_approved": true,
          "image": {
            "id": 630,
            "name": "ImageFor Testimonial  101 Campaign",
            "url": "https://massenergize-files.s3.amazonaws.com/media/plastic_bank.png"
          },
          "created_by": "8c60fed6-c1a8-410e-9729-a7368e78be5f",
          "is_published": true,
          "anonymous": false,
          "community": null,
          "user": {
            "id": "8c60fed6-c1a8-410e-9729-a7368e78be5f",
            "full_name": "Tahiru hybrid",
            "preferred_name": "Tahiruhybrid",
            "email": "abdullai.tahiru+233@gmail.com"
          }
        },
        {
          "id": "68fa94d4-4ee8-4827-9fa5-72a15b9d6652",
          "created_at": "2023-12-08T10:15:13.237Z",
          "updated_at": "2023-12-08T10:15:13.237Z",
          "is_deleted": false,
          "info": null,
          "campaign": null,
          "campaign_technology": {
            "id": "7f194e30-9c4a-408b-a854-98a134aebaf3"
          },
          "title": "Great Things Here !!",
          "body": "dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lore dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lore",
          "is_approved": true,
          "image": {
            "id": 626,
            "name": "partner_logo",
            "url": "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-12-07_at_11.28.35AM.png"
          },
          "created_by": "ba9feb49-d4c4-48e7-af7f-d88cefa8cd5c",
          "is_published": true,
          "anonymous": false,
          "community": null,
          "user": {
            "id": "ba9feb49-d4c4-48e7-af7f-d88cefa8cd5c",
            "full_name": "New hybrid78",
            "preferred_name": "Newhybrid78",
            "email": "abdullai.tahiru+280@gmail.com"
          }
        }
      ],
      "events": [
        {
          "id": "5bc8602b-7f1b-4c91-8aa4-433a3f30a196",
          "created_at": "2023-12-08T10:23:06.271Z",
          "updated_at": "2023-12-08T10:23:06.271Z",
          "is_deleted": false,
          "info": null,
          "campaign": {
            "id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d"
          },
          "event": {
            "id": 94,
            "name": "my Test Event ooo",
            "start_date": "2023-07-29T11:36:00Z",
            "end_date": "2023-07-30T11:36:00Z",
            "description": "<p>&nbsp;&tilde;bkxcb kxb x x xcv xc vxc vcxbkvjxb xcv xcv xcv cxvxc</p>",
            "image": {
              "id": 595,
              "name": "ImageFor my Test Event Event",
              "url": "https://massenergize-files.s3.amazonaws.com/media/Farmers_Market.jpg"
            }
          }
        },
        {
          "id": "6c38af98-5c43-4b3f-bb3b-d2a533731cb0",
          "created_at": "2023-12-07T17:12:02.239Z",
          "updated_at": "2023-12-07T17:12:02.239Z",
          "is_deleted": false,
          "info": null,
          "campaign": {
            "id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d"
          },
          "event": {
            "id": 89,
            "name": "aasdasd",
            "start_date": "2023-07-27T11:00:00Z",
            "end_date": "2023-07-28T12:00:00Z",
            "description": "<p>asdasdasdaDAS</p>",
            "image": null
          }
        },
        {
          "id": "921f6f42-f0c9-4af6-a3fe-2e783e723947",
          "created_at": "2023-12-08T10:23:49.010Z",
          "updated_at": "2023-12-08T10:23:49.011Z",
          "is_deleted": false,
          "info": null,
          "campaign": {
            "id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d"
          },
          "event": {
            "id": 95,
            "name": "New Test Eventhss",
            "start_date": "2023-07-27T20:46:00Z",
            "end_date": "2023-07-28T20:46:00Z",
            "description": "<p>sdfsdfsdf</p>",
            "image": null
          }
        }
      ],
      "coaches": [
        {
          "id": "d2e4cdb1-973a-45c0-8b30-d6be9aab3c81",
          "created_at": "2023-12-08T10:06:56.973Z",
          "updated_at": "2023-12-08T10:06:56.973Z",
          "is_deleted": false,
          "info": null,
          "technology": {
            "id": "17c7e50b-28ee-4d6a-a6f5-4a4a61267653"
          },
          "full_name": "Brad",
          "email": "brad@me.org",
          "phone_number": "0550751805",
          "image": {
            "id": 629,
            "name": "FileUpload for a337eedb-baef-49b9-a813-9afc5d25ad4b TechnologyCoach",
            "url": "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png"
          },
          "community": "Wayland"
        },
        {
          "id": "ed2314b1-189c-4e91-979a-8d670e874fa6",
          "created_at": "2023-12-08T10:07:32.171Z",
          "updated_at": "2023-12-08T10:07:32.171Z",
          "is_deleted": false,
          "info": null,
          "technology": {
            "id": "17c7e50b-28ee-4d6a-a6f5-4a4a61267653"
          },
          "full_name": "George",
          "email": "george@me.org",
          "phone_number": "0550751805",
          "image": {
            "id": 630,
            "name": "ImageFor Testimonial  101 Campaign",
            "url": "https://massenergize-files.s3.amazonaws.com/media/plastic_bank.png"
          },
          "community": "Acton"
        },
        {
          "id": "cbe52539-bd3f-4931-bf7f-71ca6cc26597",
          "created_at": "2023-12-08T10:08:17.241Z",
          "updated_at": "2023-12-08T10:08:17.241Z",
          "is_deleted": false,
          "info": null,
          "technology": {
            "id": "17c7e50b-28ee-4d6a-a6f5-4a4a61267653"
          },
          "full_name": "New hybrid",
          "email": "new@me.org",
          "phone_number": "0550751805",
          "image": {
            "id": 628,
            "name": "FileUpload for 400a32b6-a21e-414e-866b-c9c1306b1a6b TechnologyCoach",
            "url": "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png"
          },
          "community": "Framingham"
        }
      ],
      "campaign_id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
      "id": "17c7e50b-28ee-4d6a-a6f5-4a4a61267653",
      "created_at": "2023-12-07T11:20:35.185Z",
      "updated_at": "2023-12-08T14:48:08.433Z",
      "is_deleted": false,
      "info": null,
      "name": "Change Name",
      "description": "\"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?\"\r\n\r\nSection 1.10.33 of \"de Finibus Bonorum et Malorum\", written by Cicero in 45 BC\r\n\"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\"\r\n\r\n1914 translation by H. Rackham\r\n\"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.\"",
      "summary": "GitHub Copilot suggestions, related models and product features. More information in",
      "image": {
        "id": 612,
        "name": "FileUpload for 17c7e50b-28ee-4d6a-a6f5-4a4a61267653 Technology",
        "url": "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png"
      },
      "icon": null,
      "is_icon": false
    },
    {
      "campaign_technology_id": "5c6973b7-d3e6-416a-9a7f-23afb3d2f52d",
      "testimonials": [
        {
          "id": "3f0e5c33-54dc-40a1-b10b-1884ed2dd102",
          "created_at": "2023-12-08T10:14:22.124Z",
          "updated_at": "2023-12-08T10:14:22.124Z",
          "is_deleted": false,
          "info": null,
          "campaign": null,
          "campaign_technology": {
            "id": "5c6973b7-d3e6-416a-9a7f-23afb3d2f52d"
          },
          "title": "I did This !!",
          "body": "dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lore",
          "is_approved": true,
          "image": {
            "id": 627,
            "name": "FileUpload for 80c75c35-0aaa-4dfd-8977-1d3586711d24 TechnologyCoach",
            "url": "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-12-07_at_8.38.00PM.png"
          },
          "created_by": "4e006f09-e9d6-480a-a287-585fd59ca5a8",
          "is_published": true,
          "anonymous": false,
          "community": null,
          "user": {
            "id": "4e006f09-e9d6-480a-a287-585fd59ca5a8",
            "full_name": "Guest User",
            "preferred_name": "Guest",
            "email": "tahiruthegamer@gmail.com"
          }
        },
        {
          "id": "1fceea2e-bf01-49ba-ad54-50fe419f2263",
          "created_at": "2023-12-08T10:37:27.772Z",
          "updated_at": "2023-12-08T10:37:27.772Z",
          "is_deleted": false,
          "info": null,
          "campaign": null,
          "campaign_technology": {
            "id": "5c6973b7-d3e6-416a-9a7f-23afb3d2f52d"
          },
          "title": "Wooooow !!",
          "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "is_approved": true,
          "image": {
            "id": 629,
            "name": "FileUpload for a337eedb-baef-49b9-a813-9afc5d25ad4b TechnologyCoach",
            "url": "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png"
          },
          "created_by": "8c60fed6-c1a8-410e-9729-a7368e78be5f",
          "is_published": true,
          "anonymous": false,
          "community": null,
          "user": {
            "id": "8c60fed6-c1a8-410e-9729-a7368e78be5f",
            "full_name": "Tahiru hybrid",
            "preferred_name": "Tahiruhybrid",
            "email": "abdullai.tahiru+233@gmail.com"
          }
        },
        {
          "id": "8b57bf4e-a698-4ae5-b4a0-035dc63aefc0",
          "created_at": "2023-12-08T10:40:03.738Z",
          "updated_at": "2023-12-08T10:40:03.739Z",
          "is_deleted": false,
          "info": null,
          "campaign": null,
          "campaign_technology": {
            "id": "5c6973b7-d3e6-416a-9a7f-23afb3d2f52d"
          },
          "title": "This One DI33",
          "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "is_approved": true,
          "image": {
            "id": 630,
            "name": "ImageFor Testimonial  101 Campaign",
            "url": "https://massenergize-files.s3.amazonaws.com/media/plastic_bank.png"
          },
          "created_by": "d5293973-7a5b-4679-8fe3-13a0c17b89e6",
          "is_published": true,
          "anonymous": false,
          "community": null,
          "user": {
            "id": "d5293973-7a5b-4679-8fe3-13a0c17b89e6",
            "full_name": "Tahiru Abdullai",
            "preferred_name": "TahiruAbdullai1",
            "email": "abdullai.tahiru+203@massenergize.org"
          }
        }
      ],
      "events": [
        {
          "id": "a6262fcf-e27b-4ac1-950c-e7512c0f891c",
          "created_at": "2023-12-08T10:27:44.471Z",
          "updated_at": "2023-12-08T10:27:44.471Z",
          "is_deleted": false,
          "info": null,
          "campaign": {
            "id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d"
          },
          "event": {
            "id": 39,
            "name": "Local Seedling Sale!",
            "start_date": "2020-04-06T19:30:53Z",
            "end_date": "2020-07-26T19:30:00Z",
            "description": "<p>This year, the Neighborhood Farm is moving their massive spring seedling sale online! &nbsp;Hundreds and hundreds of varieties of vegetable, herb and flower seedlings will be available through <a href=\"https://app.barn2door.com/e/3DqVQ/all\" target=\"_blank\" style=\"\">their new online store</a>. &nbsp;Everything is grown &nbsp;naturally, with non-gmo seed, without pesticides and without synthetic fertilizers. &nbsp;New varieties will be listed weekly throughout the spring. &nbsp;Order online and pick up at the Farm in Wayland.</p>\r\n\r\n<p>The Neighborhood Farm is a small, all natural, vegetable and flower farm in Wayland, MA. &nbsp;We grow a wide range of vegetables, herbs and flowers but we specialize in heirloom tomatoes and garlic. &nbsp;We also grow hundreds and hundreds of varieties of seedlings each spring, and encourage everyone to try growing something. &nbsp;We lease land from Mainstone Farm on Old Connecticut Path, and have an on site, year round Farm Stand. &nbsp;We also attend local farmers markets including Needham, Roslindale and Jamaica Plain.</p>",
            "image": {
              "id": 372,
              "name": "ImageForLocal Seedling Sale!Event",
              "url": "https://massenergize-files.s3.amazonaws.com/media/The_Neighborhood_Farm_FB_banner.jpg"
            }
          }
        },
        {
          "id": "58af6c37-bddc-4270-b2ef-bb5a6d89eace",
          "created_at": "2023-12-08T10:26:49.501Z",
          "updated_at": "2023-12-08T10:26:49.501Z",
          "is_deleted": false,
          "info": null,
          "campaign": {
            "id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d"
          },
          "event": {
            "id": 53,
            "name": "Backyard Gardening and Compost",
            "start_date": "2020-06-08T23:30:26Z",
            "end_date": "2020-06-09T00:15:26Z",
            "description": "<p>Learn about soil and compost from the professionals at Black Earth Compost, get some backyard composting tips and learn of resources for backyard vegetable gardening. Click<a href=\"https://us02web.zoom.us/meeting/register/tZAldOCtpzgvHdR3SUFvlWQV8B6y1D9PcxmY\" target=\"_blank\" style=\"\"> here</a> to register and you will receive a confirmation email containing the link.&nbsp;</p>",
            "image": {
              "id": 495,
              "name": "ImageForBackyard Gardening and CompostEvent",
              "url": "https://massenergize-files.s3.amazonaws.com/media/Copy_of_Webinars_2.jpg"
            }
          }
        },
        {
          "id": "2c9d1116-1085-40e3-8441-5b4750bbf48b",
          "created_at": "2023-12-08T10:25:57.279Z",
          "updated_at": "2023-12-08T10:25:57.279Z",
          "is_deleted": false,
          "info": null,
          "campaign": {
            "id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d"
          },
          "event": {
            "id": 46,
            "name": "Energize Framingham Virtual Tutorial",
            "start_date": "2020-05-09T19:23:24Z",
            "end_date": "2020-05-31T16:00:00Z",
            "description": "<p>If you would like to host a virtual meeting to demonstrate Energize Framingham to a group of friends, neighbors or community members, please reach out to <a href=\"mailto:Aimee@massenergize.org\" target=\"_blank\" style=\"\">Aimee@massenergize.org</a>. We are looking for Teams to help spread the word about all the sustainability actions that the Framingham community is doing. We will set up an online meeting to teach people how to use the Energize Framingham website.<br>\r\n</p>",
            "image": {
              "id": 437,
              "name": "ImageForEnergize Framingham Virtual TutorialEvent",
              "url": "https://massenergize-files.s3.amazonaws.com/media/McAuliffe_2042_2MP.jpg"
            }
          }
        }
      ],
      "coaches": [
        {
          "id": "e8d30404-c743-49bd-a7ef-d5a7ea4d4d9b",
          "created_at": "2023-12-08T10:10:25.887Z",
          "updated_at": "2023-12-08T10:10:25.887Z",
          "is_deleted": false,
          "info": null,
          "technology": {
            "id": "f6200821-430d-4557-95f8-e7f146130d07"
          },
          "full_name": "Kaat",
          "email": "kaat@gmail.com",
          "phone_number": "0550751805",
          "image": {
            "id": 630,
            "name": "ImageFor Testimonial  101 Campaign",
            "url": "https://massenergize-files.s3.amazonaws.com/media/plastic_bank.png"
          },
          "community": "Wayland"
        },
        {
          "id": "16a2edef-a144-43eb-a2d9-739d7c61a79d",
          "created_at": "2023-12-08T10:10:52.983Z",
          "updated_at": "2023-12-08T10:10:52.983Z",
          "is_deleted": false,
          "info": null,
          "technology": {
            "id": "f6200821-430d-4557-95f8-e7f146130d07"
          },
          "full_name": "Aimee",
          "email": "aimee@gmail.com",
          "phone_number": "0246073516",
          "image": {
            "id": 630,
            "name": "ImageFor Testimonial  101 Campaign",
            "url": "https://massenergize-files.s3.amazonaws.com/media/plastic_bank.png"
          },
          "community": "Framingham"
        },
        {
          "id": "52000a39-8ca5-44df-b280-06274b6e5a83",
          "created_at": "2023-12-08T10:11:20.349Z",
          "updated_at": "2023-12-08T10:11:20.349Z",
          "is_deleted": false,
          "info": null,
          "technology": {
            "id": "f6200821-430d-4557-95f8-e7f146130d07"
          },
          "full_name": "Jeph",
          "email": "jeph@gmail.com",
          "phone_number": "0550751805",
          "image": {
            "id": 629,
            "name": "FileUpload for a337eedb-baef-49b9-a813-9afc5d25ad4b TechnologyCoach",
            "url": "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png"
          },
          "community": "Acton"
        }
      ],
      "campaign_id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
      "id": "f6200821-430d-4557-95f8-e7f146130d07",
      "created_at": "2023-12-07T11:20:09.148Z",
      "updated_at": "2023-12-08T14:44:45.084Z",
      "is_deleted": false,
      "info": null,
      "name": "Heat Pump",
      "description": "\"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?\"\r\n\r\nSection 1.10.33 of \"de Finibus Bonorum et Malorum\", written by Cicero in 45 BC\r\n\"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\"\r\n\r\n1914 translation by H. Rackham\r\n\"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.\"",
      "summary": "GitHub Copilot suggestions, related models and product features. More information in",
      "image": {
        "id": 610,
        "name": "FileUpload for f6200821-430d-4557-95f8-e7f146130d07 Technology",
        "url": "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png"
      },
      "icon": null,
      "is_icon": false
    }
  ],
  "communities": [
    {
      "id": "b4873cf3-85b4-40f4-8b8e-448d55f60cf9",
      "created_at": "2023-12-07T17:28:45.672Z",
      "updated_at": "2023-12-07T17:28:45.672Z",
      "is_deleted": false,
      "info": null,
      "campaign": {
        "id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d"
      },
      "community": {
        "id": 21,
        "name": "Tachyonics ",
        "subdomain": "taCom"
      }
    },
    {
      "id": "f50263dd-3ec2-46c4-85b8-db56bdf4b463",
      "created_at": "2023-12-07T17:29:03.441Z",
      "updated_at": "2023-12-07T17:29:03.441Z",
      "is_deleted": false,
      "info": null,
      "campaign": {
        "id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d"
      },
      "community": {
        "id": 23,
        "name": "Bibisoft",
        "subdomain": "bibinii"
      }
    },
    {
      "id": "634f1101-80b3-457c-911d-1e571b4ef644",
      "created_at": "2023-12-07T17:29:13.622Z",
      "updated_at": "2023-12-07T17:29:13.622Z",
      "is_deleted": false,
      "info": null,
      "campaign": {
        "id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d"
      },
      "community": {
        "id": 11,
        "name": "LexEnergize",
        "subdomain": "newMan"
      }
    },
    {
      "id": "8a272088-727b-4af5-88cf-f67b4fd3fedb",
      "created_at": "2023-12-07T17:29:24.191Z",
      "updated_at": "2023-12-07T17:29:24.191Z",
      "is_deleted": false,
      "info": null,
      "campaign": {
        "id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d"
      },
      "community": {
        "id": 2,
        "name": "EnergizeUs",
        "subdomain": "Energize_Us"
      }
    }
  ],
  "managers": [
    {
      "id": "e4db42e5-3f3a-48a3-90ec-1c7f8cb2622e",
      "created_at": "2023-12-07T22:15:26.631Z",
      "updated_at": "2023-12-07T22:15:26.631Z",
      "is_deleted": false,
      "info": null,
      "campaign": {
        "id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d"
      },
      "user": {
        "id": "d5293973-7a5b-4679-8fe3-13a0c17b89e6",
        "full_name": "Tahiru Abdullai",
        "preferred_name": "TahiruAbdullai1",
        "email": "abdullai.tahiru+203@massenergize.org"
      },
      "is_key_contact": true,
      "contact": "1286398612983"
    }
  ],
  "partners": [
    {
      "id": "ef6bc85d-3cf4-4c08-a60c-6c028714bfb8",
      "created_at": "2023-12-07T21:37:01.161Z",
      "updated_at": "2023-12-07T21:37:01.161Z",
      "is_deleted": false,
      "info": null,
      "campaign": {
        "id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d"
      },
      "partner": {
        "id": "973567af-c2d3-47d1-ac82-e0e3fde13979",
        "created_at": "2023-12-07T20:50:33.517Z",
        "updated_at": "2023-12-07T20:50:33.524Z",
        "is_deleted": false,
        "info": null,
        "name": "Google Ai",
        "website": "ww.google.com",
        "logo": {
          "id": 623,
          "name": "partner_logo",
          "url": "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-12-07_at_8.38.00PM.png"
        },
        "phone_number": "+233550751805",
        "email": "google@gmail.com"
      }
    },
    {
      "id": "0e644303-2dac-4688-a50e-26392b51d61c",
      "created_at": "2023-12-07T21:37:11.065Z",
      "updated_at": "2023-12-07T21:37:11.065Z",
      "is_deleted": false,
      "info": null,
      "campaign": {
        "id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d"
      },
      "partner": {
        "id": "65684082-179f-41a4-9857-1dc90ea1bdc2",
        "created_at": "2023-12-07T20:53:20.032Z",
        "updated_at": "2023-12-07T20:53:20.034Z",
        "is_deleted": false,
        "info": null,
        "name": "Meta  Solarizer",
        "website": "ww.meta.com",
        "logo": {
          "id": 625,
          "name": "partner_logo",
          "url": "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-12-07_at_8.38.00PM.png"
        },
        "phone_number": "+233550751805",
        "email": "meta@gmail.com"
      }
    },
    {
      "id": "87776169-649b-462a-826c-a2f681e172b8",
      "created_at": "2023-12-07T21:37:23.410Z",
      "updated_at": "2023-12-07T21:37:23.410Z",
      "is_deleted": false,
      "info": null,
      "campaign": {
        "id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d"
      },
      "partner": {
        "id": "3d7e3e0a-6b7b-4b4d-8c9a-568a88068ce1",
        "created_at": "2023-12-07T20:53:32.921Z",
        "updated_at": "2023-12-07T20:53:32.924Z",
        "is_deleted": false,
        "info": null,
        "name": "Meta  Solarizer",
        "website": "ww.meta.com",
        "logo": {
          "id": 626,
          "name": "partner_logo",
          "url": "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-12-07_at_11.28.35AM.png"
        },
        "phone_number": "+233550751805",
        "email": "meta@gmail.com"
      }
    },
    {
      "id": "1c8db71e-f2ec-4c71-9add-f9e5c0fc173a",
      "created_at": "2023-12-07T21:37:38.190Z",
      "updated_at": "2023-12-07T21:37:38.190Z",
      "is_deleted": false,
      "info": null,
      "campaign": {
        "id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d"
      },
      "partner": {
        "id": "9ebcbeb5-488e-423d-9c85-2dfc879c5855",
        "created_at": "2023-12-07T20:51:13.117Z",
        "updated_at": "2023-12-07T20:51:13.118Z",
        "is_deleted": false,
        "info": null,
        "name": "MassEnergize  Solarizer",
        "website": "ww.me.com",
        "logo": {
          "id": 624,
          "name": "partner_logo",
          "url": "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-12-07_at_8.38.00PM.png"
        },
        "phone_number": "+233550751805",
        "email": "me@gmail.com"
      }
    }
  ],
  "config": {
    "id": "08815f91-d008-44a0-b49e-a4135dcbe5eb",
    "created_at": "2023-12-07T18:15:33.117Z",
    "updated_at": "2023-12-07T18:15:33.117Z",
    "is_deleted": false,
    "info": null,
    "campaign": {
      "id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d"
    },
    "theme": null,
    "navigation": null,
    "advert": {
      "title": "Circular model import issue",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  },
  "navigation": [
    {
      "key": "home",
      "url": "/ab3b98d2-f1a3-4620-86db-f48a06459b3d",
      "text": "Home",
      "icon": "fa-home"
    },
    {
      "key": "questions",
      "url": "#testimonial-section",
      "text": "Questions",
      "icon": "fa-question-circle"
    },
    {
      "key": "coaches",
      "url": "#coaches-section",
      "text": "Coaches",
      "icon": "fa-users",
      "children": [
        {
          "key": "5cd65137-6b1e-424e-b5b7-b3fcfaa935e2",
          "url": "/campaign/ab3b98d2-f1a3-4620-86db-f48a06459b3d/technology/5cd65137-6b1e-424e-b5b7-b3fcfaa935e2/?section=coaches",
          "text": "Community Solar"
        },
        {
          "key": "7f194e30-9c4a-408b-a854-98a134aebaf3",
          "url": "/campaign/ab3b98d2-f1a3-4620-86db-f48a06459b3d/technology/7f194e30-9c4a-408b-a854-98a134aebaf3/?section=coaches",
          "text": "Change Name"
        },
        {
          "key": "5c6973b7-d3e6-416a-9a7f-23afb3d2f52d",
          "url": "/campaign/ab3b98d2-f1a3-4620-86db-f48a06459b3d/technology/5c6973b7-d3e6-416a-9a7f-23afb3d2f52d/?section=coaches",
          "text": "Heat Pump"
        }
      ]
    },
    {
      "key": "testimonial",
      "url": "#",
      "text": "Testimonial",
      "children": [
        {
          "key": "5cd65137-6b1e-424e-b5b7-b3fcfaa935e2",
          "url": "/campaign/ab3b98d2-f1a3-4620-86db-f48a06459b3d/technology/5cd65137-6b1e-424e-b5b7-b3fcfaa935e2/?section=testimonials",
          "text": "Community Solar"
        },
        {
          "key": "7f194e30-9c4a-408b-a854-98a134aebaf3",
          "url": "/campaign/ab3b98d2-f1a3-4620-86db-f48a06459b3d/technology/7f194e30-9c4a-408b-a854-98a134aebaf3/?section=testimonials",
          "text": "Change Name"
        },
        {
          "key": "5c6973b7-d3e6-416a-9a7f-23afb3d2f52d",
          "url": "/campaign/ab3b98d2-f1a3-4620-86db-f48a06459b3d/technology/5c6973b7-d3e6-416a-9a7f-23afb3d2f52d/?section=testimonials",
          "text": "Heat Pump"
        }
      ],
      "icon": "fa-comment"
    },
    {
      "key": "events",
      "url": "#",
      "text": "Events",
      "children": [
        {
          "key": "5cd65137-6b1e-424e-b5b7-b3fcfaa935e2",
          "url": "/campaign/ab3b98d2-f1a3-4620-86db-f48a06459b3d/technology/5cd65137-6b1e-424e-b5b7-b3fcfaa935e2/?section=events",
          "text": "Community Solar"
        },
        {
          "key": "7f194e30-9c4a-408b-a854-98a134aebaf3",
          "url": "/campaign/ab3b98d2-f1a3-4620-86db-f48a06459b3d/technology/7f194e30-9c4a-408b-a854-98a134aebaf3/?section=events",
          "text": "Change Name"
        },
        {
          "key": "5c6973b7-d3e6-416a-9a7f-23afb3d2f52d",
          "url": "/campaign/ab3b98d2-f1a3-4620-86db-f48a06459b3d/technology/5c6973b7-d3e6-416a-9a7f-23afb3d2f52d/?section=events",
          "text": "Heat Pump"
        }
      ],
      "icon": "fa-calendar"
    }
  ]
};

initialState = {
  ...initialState,
  disable_partners_section: false,
  communities: initialState?.communities.map(({ community }) => {
    return {
      ...community,
      value: community?.community,
    }
  }) || []
}

const reducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case "SET_FIELD_VALUE":
      return { ...state, [payload.field]: payload.value };
    default:
      throw new Error(`Unsupported action type: ${type}`);
  }
};

export function NewCampaign ({ props }) {
  const [showError, setShowError] = useState(false);

  const [campaignDetails, dispatch] = useReducer(reducer, initialState);

  const handleCampaignDetailsChange = (name, value) => {
    dispatch({ type: "SET_FIELD_VALUE", payload: { field: name, value } });
  };

  const [STEP, setStep] = useNamedState("STEP", "START"); // START, DETAILS, MANAGERS, TECHNOLOGIES, EVENTS, REVIEW, SUBMIT

  const dedupingInterval = 3_600_000;
  const {
    initialData: allCommunitiesInitialData,
    data: allCommunities,
    error: allCommunitiesError,
    isValidating: allCommunitiesIsValidating,
    isLoading: allCommunitiesIsLoading,
  } = useSWR("communities.list", fetchCommunitiesList, {
    dedupingInterval
  });

  const {
    data: allTechnologies,
    isLoading: allTechnologiesLoading,
  } = useSWR(`campaigns.technologies.list/${campaignDetails?.id}`, async () => {
    return await fetchCampaignTechnologies(campaignDetails?.id);
  }, {
    dedupingInterval
  });

  const {
    // initialData: allPartnersInitialData,
    data: allPartners,
    error: allPartnersError,
    isValidating: allPartnersIsValidating,
    isLoading: allPartnersIsLoading,
  } = useSWR("partners.list", fetchAllPartners, {
    dedupingInterval
  });

  const {
    data: allEvents,
    isLoading: allEventsLoading,
    isValidating: allEventsIsValidating,
    error: allEventsError,
  } = useSWR(`campaigns.events.list/${campaignDetails?.id}`, async () => {
    return await fetchCampaignEvents(campaignDetails?.id);
  }, {
    dedupingInterval
  });

  // const {
  //   // initialData: allManagersInitialData,
  //   data: allManagers,
  //   error: allManagersError,
  //   isValidating: allManagersIsValidating,
  //   isLoading: allManagersIsLoading,
  // } = useSWR(`campaigns.managers.list/${campaignDetails.id}`, async () => {
  //   return await fetchCampaignManagers("campaigns.managers.list", campaignDetails.id)
  // }, {
  //   dedupingInterval
  // });

  const lists = {
    allPartners: {
      data: allPartners,
      error: allPartnersError,
      isValidating: allPartnersIsValidating,
      isLoading: allPartnersIsLoading,
    },
    allManagers: {
      // data: allManagers,
      // error: allManagersError,
      // isValidating: allManagersIsValidating,
      // isLoading: allManagersIsLoading,
    },
    allTechnologies: {
      data: allTechnologies,
      isLoading: allTechnologiesLoading,
    },
    allCommunities: {
      data: allCommunities,
      error: allCommunitiesError,
      isValidating: allCommunitiesIsValidating,
      isLoading: allCommunitiesIsLoading,
    },
    allEvents: {
      data: allEvents,
      isLoading: allEventsLoading,
      error: allEventsError,
      isValidating: allEventsIsValidating,
    },
  }

  return (
    <AdminLayout>
      <div style={{ padding: "1rem", }}>
        {
          STEP === "START" ? (
            <StartCampaign
              setStep={setStep}
              campaignDetails={campaignDetails}
              setCampaignDetails={handleCampaignDetailsChange}
              lists={lists}
            />
          ) : null
        }

        {
          STEP === "COMPLETE" ? (
            <CampaignDetailsAndPreview
              setStep={setStep}
              campaignDetails={campaignDetails}
              setCampaignDetails={handleCampaignDetailsChange}
              lists={lists}
            />
          ) : null
        }
      </div>
    </AdminLayout>
  );
}

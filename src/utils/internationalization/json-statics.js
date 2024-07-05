// All items here are dummies used to test the internationalization feature

export const FRENCH = {
  loader: {
    text: "Récupération des détails de la campagne...",
  },
  share: { text: "Partager" },
  footer: {
    news_letter: {
      subscribe_button: { text: "Abonnez-vous à notre newsletter" },
      subscribe_message: { text: "Vous êtes déjà abonné avec " },
    },
    quick_links: { text: "Liens rapides" },
  },
  navbar: {
    home: { text: "Accueil" },
    tech: { text: "Technologies" },
    coaches: { text: "Entraîneurs" },
    events: { text: "Événements" },
    vendors: { text: "fournisseurs" },
    Deals: { text: "Offres" },
  },
  pages: {
    homepage: {
      share: {
        button: { copied: { text: "Copié !" }, copy: { text: "Copier le lien" } },
        title: { text: "Partager la campagne" },
        hint: { text: "Vous pouvez copier le lien et le partager" },
        instruction: {
          text: "Veuillez sélectionner une plateforme sur laquelle vous souhaitez partager cette technologie",
        },
      },
      sections: {
        key_contact: {
          text: "Contact clé",
        },
        about_box: {
          button: "En savoir plus",
        },
        getting_started_section: {
          quote: { text: "Citation" },
          coach: { text: "Entraîneur" },
          learn_more: { text: "En savoir plus" },
          communities: {
            text: "Communautés",
            title: "Communautés",
            description: "Connectez-vous avec votre communauté et découvrez d'autres actions",
          },
        },
        testimonials_section: {
          scrollable: {
            text: "Faites défiler de gauche à droite pour voir plus de témoignages, ou utilisez les boutons de flèche (en haut à droite) pour faire défiler",
          },
          title: { text: "Témoignages" },
          call_to_add_testimonial: { text: "Ajoutez votre témoignage ici" },
          call_to_hide_testimonial: { text: "Masquer le formulaire de témoignage" },
          call_to_filter: { text: "Filtrer les témoignages par" },
          full_view: { text: "Vue complète" },
        },
        events_section: {
          scrollable: {
            text: "Faites défiler de gauche à droite pour voir plus d'événements, ou utilisez les boutons de flèche (en haut à droite) pour faire défiler",
          },
          call_to_filter: { text: "Filtrer les témoignages par" },
          card: { online: { text: "En ligne" }, both: { text: "Les deux" }, in_person: { text: "En personne" } },
        },
        coaches_section: {
          call_to_filter: { text: "Filtrer les témoignages par" },
          get_help: { text: "Obtenir de l'aide" },
          help_modal: { title: "Obtenir de l'aide" },
        },
      },
    },
    one_technology_page: {
      share: {
        button: { copied: { text: "Copié !" }, copy: { text: "Copier le lien" } },
        title: { text: "Partager" },
        hint: { text: "Vous pouvez copier le lien et le partager" },
        instruction: {
          text: "Veuillez sélectionner une plateforme sur laquelle vous souhaitez partager cette technologie",
        },
      },
      loader: {
        text: "Récupération des détails de la technologie...",
      },
      sections: {
        see_more: { text: "Voir plus..." },
        see_less: { text: "Voir moins..." },
        get_updates: {
          button: { text: "Recevoir des mises à jour" },
          description: { text: "Recevoir des mises à jour sur" },
          title: { text: "Recevoir des mises à jour sur" },
          confirm_button: { text: "Recevoir des mises à jour" },
          cancel_button: { text: "Annuler" },
        },
        comments: {
          title: { text: "Commentaires" },
          see_more_trunc: { text: "Voir plus" },
          see_more: { text: "Voir plus de commentaires" },
          call_to_add: { text: "Ajouter un commentaire" },
          modal: {
            title: "Lire les commentaires ou ajouter le vôtre",
            relative_data: { text: "il y a 50 jours" },
            name: { text: "Votre nom" },
            name_placeholder: { text: "Qui fait ce commentaire" },
            comment_placeholder: { text: "Tapez votre commentaire ici" },
            button: { text: "Commenter" },
            no_comments: { text: "Pas encore de commentaires, ajoutez le vôtre !" },
          },
        },
        interactions: {
          like: { text: "Aimer", plural: "Aime" },
          comment: { text: "Commenter", plural: "Commentaires" },
          view: { text: "Vue", plural: "Vues" },
          share: { text: "Partager", plural: "Partages" },
        },
        testimonials_section: {
          title: { text: "Témoignages" },
          call_to_add_testimonial: { text: "Ajoutez votre témoignage ici" },
          full_view: { text: "Vue complète" },
        },
        events_section: {
          card: { online: { text: "En ligne" }, both: { text: "Les deux" }, in_person: { text: "En personne" } },
        },
        coaches_section: {
          button: { text: "Obtenir de l'aide" },
        },
      },
    },
    one_testimonial_page: {
      loader: {
        text: "Récupération des détails du témoignage...",
      },
      sections: {
        call_to_add_testimonial: { text: "Ajoutez votre témoignage ici" },
        call_to_hide_testimonial: { text: "Masquer le formulaire de témoignage" },
        form: { title: { text: "Ajoutez votre témoignage" } },
        sidebar: {
          other_testimonials: { text: "Autres témoignages" },
          call_to_add_testimonial: { text: "Ajouter un témoignage" },
          call_to_hide_testimonial: { text: "Masquer le formulaire" },
        },
      },
    },
    one_event_page: {
      loader: {
        text: "Récupération des détails de l'événement...",
      },
      sections: {
        card: { online: { text: "En ligne" }, both: { text: "Les deux" }, in_person: { text: "En personne" } },
        call_to_download: { text: "Télécharger dans votre calendrier" },
        apple_calendar: { text: "ICAL" },
        google_calendar: { text: "Google Calendar" },
        call_to_register: { text: "S'inscrire/Rejoindre" },
      },
    },
  },
  modals: {
    community_selection: {
      selection_label: { text: "Dans quelle communauté vivez-vous ?" },
      text_after_selection: {
        text: "Nous vous dirigerons vers les ressources appropriées en fonction de votre emplacement -",
      },
      buttons: {
        close: { text: "Fermer" },
        submit: { text: "Allons-y" },
      },
      success: { text: "Merci de nous avoir rejoint" },
    },
  },
};

export const ENGLISH = {
  loader: {
    text: "Fetching Campaign Details...",
  },
  share: { text: "Share" },
  footer: {
    news_letter: {
      subscribe_button: { text: "Subscribe to our Newsletter" },
      subscribe_message: { text: "You've already subscribed with " },
    },
    quick_links: { text: "Quick Links" },
  },
  navbar: {
    home: { text: "Home" },
    tech: { text: "Technologies" },
    coaches: { text: "Coaches" },
    events: { text: "Events" },
    vendors: { text: "vendors" },
    Deals: { text: "Deals" },
  },
  pages: {
    homepage: {
      share: {
        button: { copied: { text: "Copied!" }, copy: { text: "Copy Link" } },
        title: { text: "Share Campaign" },
        hint: { text: "You can copy the link and share it" },
        instruction: { text: "Please select a platform that you would like to share this technology to" },
      },
      sections: {
        key_contact: {
          text: "Key Contact",
        },

        about_box: {
          button: "Learn More",
        },
        getting_started_section: {
          quote: { text: "Quote" },
          coach: { text: "Coach" },
          learn_more: { text: "Learn More" },
          communities: {
            text: "Communities",
            title: "Communities",
            description: "Connect with your community and check out other actions",
          },
        },
        testimonials_section: {
          scrollable: {
            text: "flic and flac Scroll from left to right to see more testimonials, or use the arrow buttons(top right) to scroll",
          },
          title: { text: "Testimonials" },
          call_to_add_testimonial: { text: "Add your testimonial here" },
          call_to_hide_testimonial: { text: "Hide testimonial form" },
          call_to_filter: { text: "Filter testimonials by" },
          full_view: { text: "Full View" },
        },
        events_section: {
          scrollable: {
            text: "Scroll from left to right to see more events, or use the arrow buttons(top right) to scroll",
          },
          call_to_filter: { text: "Filter testimonials by" },
          card: { online: { text: "Online" }, both: { text: "Both" }, in_person: { text: "In Person" } },
        },
        coaches_section: {
          call_to_filter: { text: "Filter testimonials by" },
          get_help: { text: "Get Help" },
          help_modal: { title: "Get Help" },
        },
      },
    },
    one_technology_page: {
      share: {
        button: { copied: { text: "Copied!" }, copy: { text: "Copy Link" } },
        title: { text: "Share" },
        hint: { text: "You can copy the link and share it" },
        instruction: { text: "Please select a platform that you would like to share this technology to" },
      },
      loader: {
        text: "Fetching Technology Details...",
      },
      sections: {
        see_more: { text: "See More..." },
        see_less: { text: "See Less..." },
        get_updates: {
          button: { text: "Get Updates" },
          description: { text: "Get Updates on" },
          title: { text: "Get Updates on" },
          confirm_button: { text: "Get Updates" },
          cancel_button: { text: "Cancel" },
        },
        comments: {
          title: { text: "Comments" },
          see_more_trunc: { text: "See More" },
          see_more: { text: "See More Comments" },
          call_to_add: { text: "Add a comment" },
          modal: {
            title: "Read comments or add yourrs",
            relative_data: { text: "50 days ago" },
            name: { text: "Your name" },
            name_placeholder: { text: "Who is making this comment " },
            comment_placeholder: { text: "Type comment here " },
            button: { text: "Comment" },
            no_comments: { text: "No comments yet, add yours!" },
          },
        },
        interactions: {
          like: { text: "Like", plural: "Likes" },
          comment: { text: "Comment", plural: "Comments" },
          view: { text: "View", plural: "Views" },
          share: { text: "Share", plural: "Shares" },
        },
        testimonials_section: {
          title: { text: "Testimonials" },
          call_to_add_testimonial: { text: "Add your testimonial here" },
          full_view: { text: "Full View" },
        },
        events_section: {
          card: { online: { text: "Online" }, both: { text: "Both" }, in_person: { text: "In Person" } },
        },
        coaches_section: {
          button: { text: "Get Help" },
        },
      },
    },

    one_testimonial_page: {
      loader: {
        text: "Fetching testimonial details...",
      },
      sections: {
        call_to_add_testimonial: { text: "Add your testimonial here" },
        call_to_hide_testimonial: { text: "Hide testimonial form" },
        form: { title: { text: "Add your testimonial" } },
        sidebar: {
          other_testimonials: { text: "Other Testimonials" },
          call_to_add_testimonial: { text: "Add Testimonial" },
          call_to_hide_testimonial: { text: "Hide Form" },
        },
      },
    },
    one_event_page: {
      loader: {
        text: "Fetching event details...",
      },
      sections: {
        card: { online: { text: "Online" }, both: { text: "Both" }, in_person: { text: "In Person" } },
        call_to_download: { text: "Download to your calendar" },
        apple_calendar: { text: "ICAL" },
        google_calendar: { text: "Google Calendar" },
        call_to_register: { text: "Register/Join" },
      },
    },
  },
  modals: {
    community_selection: {
      selection_label: { text: "What community do you live in?" },
      text_after_selection: { text: "We will direct you to the right resources based on wehere you are from -" },
      buttons: {
        close: { text: "Close" },
        submit: { text: "Let's Go" },
      },
      success: { text: "Thanks for joining" },
    },
  },
};

export const SPANISH = {
  loader: {
    text: "Obteniendo detalles de la campaña...",
  },
  share: { text: "Compartir" },
  footer: {
    news_letter: {
      subscribe_button: { text: "Suscríbete a nuestro boletín" },
      subscribe_message: { text: "Ya te has suscrito con " },
    },
    quick_links: { text: "Enlaces rápidos" },
  },
  navbar: {
    home: { text: "Inicio" },
    tech: { text: "Tecnologías" },
    coaches: { text: "Entrenadores" },
    events: { text: "Eventos" },
    vendors: { text: "proveedores" },
    Deals: { text: "Ofertas" },
  },
  pages: {
    homepage: {
      share: {
        button: { copied: { text: "¡Copiado!" }, copy: { text: "Copiar enlace" } },
        title: { text: "Compartir campaña" },
        hint: { text: "Puedes copiar el enlace y compartirlo" },
        instruction: { text: "Por favor, selecciona una plataforma en la que te gustaría compartir esta tecnología" },
      },
      sections: {
        key_contact: {
          text: "Contacto clave",
        },
        about_box: {
          button: "Saber más",
        },
        getting_started_section: {
          quote: { text: "Cita" },
          coach: { text: "Entrenador" },
          learn_more: { text: "Saber más" },
          communities: {
            text: "Comunidades",
            title: "Comunidades",
            description: "Conéctate con tu comunidad y descubre otras acciones",
          },
        },
        testimonials_section: {
          scrollable: {
            text: "Desplázate de izquierda a derecha para ver más testimonios, o usa los botones de flecha (arriba a la derecha) para desplazarte",
          },
          title: { text: "Testimonios" },
          call_to_add_testimonial: { text: "Añade tu testimonio aquí" },
          call_to_hide_testimonial: { text: "Ocultar formulario de testimonio" },
          call_to_filter: { text: "Filtrar testimonios por" },
          full_view: { text: "Vista completa" },
        },
        events_section: {
          scrollable: {
            text: "Desplázate de izquierda a derecha para ver más eventos, o usa los botones de flecha (arriba a la derecha) para desplazarte",
          },
          call_to_filter: { text: "Filtrar testimonios por" },
          card: { online: { text: "En línea" }, both: { text: "Ambos" }, in_person: { text: "En persona" } },
        },
        coaches_section: {
          call_to_filter: { text: "Filtrar testimonios por" },
          get_help: { text: "Obtener ayuda" },
          help_modal: { title: "Obtener ayuda" },
        },
      },
    },
    one_technology_page: {
      share: {
        button: { copied: { text: "¡Copiado!" }, copy: { text: "Copiar enlace" } },
        title: { text: "Compartir" },
        hint: { text: "Puedes copiar el enlace y compartirlo" },
        instruction: { text: "Por favor, selecciona una plataforma en la que te gustaría compartir esta tecnología" },
      },
      loader: {
        text: "Obteniendo detalles de la tecnología...",
      },
      sections: {
        see_more: { text: "Ver más..." },
        see_less: { text: "Ver menos..." },
        get_updates: {
          button: { text: "Recibir actualizaciones" },
          description: { text: "Recibir actualizaciones sobre" },
          title: { text: "Recibir actualizaciones sobre" },
          confirm_button: { text: "Recibir actualizaciones" },
          cancel_button: { text: "Cancelar" },
        },
        comments: {
          title: { text: "Comentarios" },
          see_more_trunc: { text: "Ver más" },
          see_more: { text: "Ver más comentarios" },
          call_to_add: { text: "Añadir un comentario" },
          modal: {
            title: "Leer comentarios o añadir el tuyo",
            relative_data: { text: "Hace 50 días" },
            name: { text: "Tu nombre" },
            name_placeholder: { text: "¿Quién está haciendo este comentario?" },
            comment_placeholder: { text: "Escribe tu comentario aquí" },
            button: { text: "Comentar" },
            no_comments: { text: "¡Aún no hay comentarios, añade el tuyo!" },
          },
        },
        interactions: {
          like: { text: "Me gusta", plural: "Me gusta" },
          comment: { text: "Comentario", plural: "Comentarios" },
          view: { text: "Vista", plural: "Vistas" },
          share: { text: "Compartir", plural: "Compartidos" },
        },
        testimonials_section: {
          title: { text: "Testimonios" },
          call_to_add_testimonial: { text: "Añade tu testimonio aquí" },
          full_view: { text: "Vista completa" },
        },
        events_section: {
          card: { online: { text: "En línea" }, both: { text: "Ambos" }, in_person: { text: "En persona" } },
        },
        coaches_section: {
          button: { text: "Obtener ayuda" },
        },
      },
    },
    one_testimonial_page: {
      loader: {
        text: "Obteniendo detalles del testimonio...",
      },
      sections: {
        call_to_add_testimonial: { text: "Añade tu testimonio aquí" },
        call_to_hide_testimonial: { text: "Ocultar formulario de testimonio" },
        form: { title: { text: "Añade tu testimonio" } },
        sidebar: {
          other_testimonials: { text: "Otros testimonios" },
          call_to_add_testimonial: { text: "Añadir testimonio" },
          call_to_hide_testimonial: { text: "Ocultar formulario" },
        },
      },
    },
    one_event_page: {
      loader: {
        text: "Obteniendo detalles del evento...",
      },
      sections: {
        card: { online: { text: "En línea" }, both: { text: "Ambos" }, in_person: { text: "En persona" } },
        call_to_download: { text: "Descargar a tu calendario" },
        apple_calendar: { text: "ICAL" },
        google_calendar: { text: "Google Calendar" },
        call_to_register: { text: "Registrar/Unirse" },
      },
    },
  },
  modals: {
    community_selection: {
      selection_label: { text: "¿En qué comunidad vives?" },
      text_after_selection: { text: "Te dirigiremos a los recursos adecuados según tu ubicación -" },
      buttons: {
        close: { text: "Cerrar" },
        submit: { text: "Vamos allá" },
      },
      success: { text: "Gracias por unirte" },
    },
  },
};

export const CHINESE = {
  loader: {
    text: "获取活动详情...",
  },
  share: { text: "分享" },
  footer: {
    news_letter: {
      subscribe_button: { text: "订阅我们的新闻通讯" },
      subscribe_message: { text: "您已订阅 " },
    },
    quick_links: { text: "快速链接" },
  },
  navbar: {
    home: { text: "首页" },
    tech: { text: "技术" },
    coaches: { text: "教练" },
    events: { text: "活动" },
    vendors: { text: "供应商" },
    Deals: { text: "优惠" },
  },
  pages: {
    homepage: {
      share: {
        button: { copied: { text: "已复制!" }, copy: { text: "复制链接" } },
        title: { text: "分享活动" },
        hint: { text: "您可以复制链接并分享" },
        instruction: { text: "请选择一个平台，您希望分享此技术" },
      },
      sections: {
        key_contact: {
          text: "主要联系人",
        },
        about_box: {
          button: "了解更多",
        },
        getting_started_section: {
          quote: { text: "引用" },
          coach: { text: "教练" },
          learn_more: { text: "了解更多" },
          communities: {
            text: "社区",
            title: "社区",
            description: "与您的社区联系并查看其他操作",
          },
        },
        testimonials_section: {
          scrollable: {
            text: "从左向右滚动查看更多推荐，或使用箭头按钮（右上角）滚动",
          },
          title: { text: "推荐" },
          call_to_add_testimonial: { text: "在此添加您的推荐" },
          call_to_hide_testimonial: { text: "隐藏推荐表格" },
          call_to_filter: { text: "筛选推荐" },
          full_view: { text: "全屏查看" },
        },
        events_section: {
          scrollable: {
            text: "从左向右滚动查看更多活动，或使用箭头按钮（右上角）滚动",
          },
          call_to_filter: { text: "筛选推荐" },
          card: { online: { text: "在线" }, both: { text: "两者" }, in_person: { text: "线下" } },
        },
        coaches_section: {
          call_to_filter: { text: "筛选推荐" },
          get_help: { text: "获取帮助" },
          help_modal: { title: "获取帮助" },
        },
      },
    },
    one_technology_page: {
      share: {
        button: { copied: { text: "已复制!" }, copy: { text: "复制链接" } },
        title: { text: "分享" },
        hint: { text: "您可以复制链接并分享" },
        instruction: { text: "请选择一个平台，您希望分享此技术" },
      },
      loader: {
        text: "获取技术详情...",
      },
      sections: {
        see_more: { text: "查看更多..." },
        see_less: { text: "收起..." },
        get_updates: {
          button: { text: "获取更新" },
          description: { text: "获取更新" },
          title: { text: "获取更新" },
          confirm_button: { text: "获取更新" },
          cancel_button: { text: "取消" },
        },
        comments: {
          title: { text: "评论" },
          see_more_trunc: { text: "查看更多" },
          see_more: { text: "查看更多评论" },
          call_to_add: { text: "添加评论" },
          modal: {
            title: "阅读评论或添加您的评论",
            relative_data: { text: "50天前" },
            name: { text: "您的姓名" },
            name_placeholder: { text: "谁在发表评论" },
            comment_placeholder: { text: "在此输入评论" },
            button: { text: "评论" },
            no_comments: { text: "还没有评论，快添加您的评论！" },
          },
        },
        interactions: {
          like: { text: "赞", plural: "赞" },
          comment: { text: "评论", plural: "评论" },
          view: { text: "查看", plural: "查看" },
          share: { text: "分享", plural: "分享" },
        },
        testimonials_section: {
          title: { text: "推荐" },
          call_to_add_testimonial: { text: "在此添加您的推荐" },
          full_view: { text: "全屏查看" },
        },
        events_section: {
          card: { online: { text: "在线" }, both: { text: "两者" }, in_person: { text: "线下" } },
        },
        coaches_section: {
          button: { text: "获取帮助" },
        },
      },
    },
    one_testimonial_page: {
      loader: {
        text: "获取推荐详情...",
      },
      sections: {
        call_to_add_testimonial: { text: "在此添加您的推荐" },
        call_to_hide_testimonial: { text: "隐藏推荐表格" },
        form: { title: { text: "添加您的推荐" } },
        sidebar: {
          other_testimonials: { text: "其他推荐" },
          call_to_add_testimonial: { text: "添加推荐" },
          call_to_hide_testimonial: { text: "隐藏表格" },
        },
      },
    },
    one_event_page: {
      loader: {
        text: "获取活动详情...",
      },
      sections: {
        card: { online: { text: "在线" }, both: { text: "两者" }, in_person: { text: "线下" } },
        call_to_download: { text: "下载到您的日历" },
        apple_calendar: { text: "ICAL" },
        google_calendar: { text: "谷歌日历" },
        call_to_register: { text: "注册/加入" },
      },
    },
  },
  modals: {
    community_selection: {
      selection_label: { text: "您住在哪个社区？" },
      text_after_selection: { text: "我们将根据您的所在地引导您到正确的资源-" },
      buttons: {
        close: { text: "关闭" },
        submit: { text: "开始吧" },
      },
      success: { text: "感谢您的加入" },
    },
  },
};

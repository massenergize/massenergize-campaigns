// All items here are dummies used to test the internationalization feature

export const ENGLISH = {
  inPreview: {
    button: { text: "Preview Mode" },
    notice: {
      text: " is not published yet. Admins are still working on it. Please come back later when its complete...",
    },
  },
  forms: {
    testimonials: {
      title: { text: "Title*", placeholder: "Enter the title of the testimonial...", label: "Tell us your story!" },
      image: { label: "Include an image in your testimonial", text: "Choose file", placeholder: "No file Chosen" },
      community: { label: "Select your community", placeholder: "---Select your community---" },
      technology: { label: "What technology is this testimonial under?", placeholder: "---Select the technology---" },
      description: { placeholder: "Start telling your story here..." },
      buttons: { cancel: { text: "Cancel" }, submit: { text: "Submit" } },
    },
  },

  loader: {
    text: "Fetching Campaign Details...",
  },
  share: { text: "Share" },
  footer: {
    modal: { title: { prefix: "Follow" }, cancel: { text: "Cancel" }, ok: { text: "Subscribe" } },
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
      about: { text: "About " },
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
            text: "Scroll from left to right to see more testimonials, or use the arrow buttons(top right) to scroll",
          },
          title: { text: "Testimonials" },
          call_to_add_testimonial: { text: "Add your testimonial here" },
          call_to_hide_testimonial: { text: "Hide testimonial form" },
          call_to_filter: { text: "Filter testimonials by" },
          full_view: { text: "Full View" },
        },
        events_section: {
          title: { text: "Events" },
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
            title: "Read comments or add yours",
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

        coaches_section: {
          button: { text: "Get Help" },
        },
        do_more: {
          title: { text: " Participating Communities" },
        },
        events_section: {
          title: { text: "Events" },
          card: { online: { text: "Online" }, both: { text: "Both" }, in_person: { text: "In Person" } },
        },
        why_section: {
          why: { text: "Why" },
        },
        take_action_section: {
          title: { text: "Take Action" },
          coaches: {
            title: "Ask a question",
            description: "Community volunteers are ready to answer questions, big or small",
            button: { text: "Get Help" },
          },
          incentives: {
            title: "Show me the money",
            description: "It gets better! See all the incentives available to you.",
            button: { text: "Incentives" },
          },
          vendors: {
            title: "Find a Vendor",
            description: "The critical question - who should you have quote your project?",
            button: { text: "Vendors" },
          },
        },
        vendors_section: {
          title: { text: "Vendors" },
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
    languageSelectionModal: { title: { text: "Choose a Language" } },
    whereFrom: {
      title: { text: "Please tell us where you are from" },
      buttons: { no: { text: "NO" }, submit: { text: "Okay, Done!" } },
    },
    preTestimonial: {
      title: { text: "Before you add a testimonial, we would like to know you" },
      buttons: { continue: { text: "Continue" }, cancel: { text: "Cancel" } },
    },
    community_selection: {
      selection_label: { text: "What community do you live in?" },
      text_after_selection: { text: "We will direct you to the right resources based on where you are from -" },
      form: {
        zipcode: {
          text: "Zip Code",
          label: "Enter your zip code (Editable)",
          placeholder: "Enter zip code here...",
        },
        community_name: { text: "Community Name", placeholder: "What community do you live in?" },
      },
      buttons: {
        close: { text: "Close" },
        submit: { text: "Let's Go" },
      },
      success: { text: "Thanks for joining!" },
    },
    join: {
      email: { text: "Email", placeholder: "Enter Email Here..." },
      buttons: { cancel: { text: "Cancel" }, ok: { text: "Let's Go" } },
    },
    help: {
      buttons: { cancel: { text: "Cancel" }, ok: { text: "Let's Go" } },
      title: { text: "Get Help" },
      selection_hint: { text: "We will direct you to the right resources based on where you are from" },
    },
  },
};

export const GERMAN = {
  inPreview: {
    button: { text: "Vorschau-Modus" },
    notice: {
      text: "ist noch nicht veröffentlicht. Die Administratoren arbeiten noch daran. Bitte kommen Sie später zurück, wenn es fertig ist...",
    },
  },
  forms: {
    testimonials: {
      title: {
        text: "Titel*",
        placeholder: "Geben Sie den Titel des Testimonials ein...",
        label: "Erzählen Sie uns Ihre Geschichte!",
      },
      image: {
        label: "Fügen Sie ein Bild in Ihr Testimonial ein",
        text: "Datei wählen",
        placeholder: "Keine Datei ausgewählt",
      },
      community: { label: "Wählen Sie Ihre Gemeinschaft", placeholder: "---Wählen Sie Ihre Gemeinschaft---" },
      technology: {
        label: "Unter welcher Technologie fällt dieses Testimonial?",
        placeholder: "---Wählen Sie die Technologie---",
      },
      description: { placeholder: "Beginnen Sie hier, Ihre Geschichte zu erzählen..." },
      buttons: { cancel: { text: "Abbrechen" }, submit: { text: "Einreichen" } },
    },
  },

  loader: {
    text: "Kampagnendetails abrufen...",
  },
  share: { text: "Teilen" },
  footer: {
    modal: { title: { prefix: "Folgen" }, cancel: { text: "Abbrechen" }, ok: { text: "Abonnieren" } },
    news_letter: {
      subscribe_button: { text: "Newsletter abonnieren" },
      subscribe_message: { text: "Sie sind bereits abonniert mit " },
    },
    quick_links: { text: "Schnellzugriffe" },
  },
  navbar: {
    home: { text: "Startseite" },
    tech: { text: "Technologien" },
    coaches: { text: "Trainer" },
    events: { text: "Veranstaltungen" },
    vendors: { text: "Anbieter" },
    Deals: { text: "Angebote" },
  },
  pages: {
    homepage: {
      share: {
        button: { copied: { text: "Kopiert!" }, copy: { text: "Link kopieren" } },
        title: { text: "Kampagne teilen" },
        hint: { text: "Sie können den Link kopieren und teilen" },
        instruction: { text: "Bitte wählen Sie eine Plattform aus, auf der Sie diese Technologie teilen möchten" },
      },
      sections: {
        key_contact: {
          text: "Hauptkontakt",
        },

        about_box: {
          button: "Mehr erfahren",
        },
        getting_started_section: {
          quote: { text: "Zitat" },
          coach: { text: "Trainer" },
          learn_more: { text: "Mehr erfahren" },
          communities: {
            text: "Gemeinschaften",
            title: "Gemeinschaften",
            description: "Verbinden Sie sich mit Ihrer Gemeinschaft und sehen Sie sich weitere Aktionen an",
          },
        },
        testimonials_section: {
          scrollable: {
            text: "Scrollen Sie von links nach rechts, um weitere Testimonials zu sehen, oder verwenden Sie die Pfeiltasten (oben rechts), um zu scrollen",
          },
          title: { text: "Testimonials" },
          call_to_add_testimonial: { text: "Fügen Sie hier Ihr Testimonial hinzu" },
          call_to_hide_testimonial: { text: "Testimonial-Formular ausblenden" },
          call_to_filter: { text: "Testimonials filtern nach" },
          full_view: { text: "Vollansicht" },
        },
        events_section: {
          title: { text: "Veranstaltungen" },
          scrollable: {
            text: "Scrollen Sie von links nach rechts, um weitere Veranstaltungen zu sehen, oder verwenden Sie die Pfeiltasten (oben rechts), um zu scrollen",
          },
          call_to_filter: { text: "Testimonials filtern nach" },
          card: { online: { text: "Online" }, both: { text: "Beide" }, in_person: { text: "Persönlich" } },
        },
        coaches_section: {
          call_to_filter: { text: "Testimonials filtern nach" },
          get_help: { text: "Hilfe erhalten" },
          help_modal: { title: "Hilfe erhalten" },
        },
      },
    },
    one_technology_page: {
      share: {
        button: { copied: { text: "Kopiert!" }, copy: { text: "Link kopieren" } },
        title: { text: "Teilen" },
        hint: { text: "Sie können den Link kopieren und teilen" },
        instruction: { text: "Bitte wählen Sie eine Plattform aus, auf der Sie diese Technologie teilen möchten" },
      },
      loader: {
        text: "Technologiedetails abrufen...",
      },
      sections: {
        see_more: { text: "Mehr sehen..." },
        see_less: { text: "Weniger sehen..." },
        get_updates: {
          button: { text: "Updates erhalten" },
          description: { text: "Updates erhalten über" },
          title: { text: "Updates erhalten über" },
          confirm_button: { text: "Updates erhalten" },
          cancel_button: { text: "Abbrechen" },
        },
        comments: {
          title: { text: "Kommentare" },
          see_more_trunc: { text: "Mehr sehen" },
          see_more: { text: "Mehr Kommentare sehen" },
          call_to_add: { text: "Einen Kommentar hinzufügen" },
          modal: {
            title: "Lesen Sie Kommentare oder fügen Sie Ihren hinzu",
            relative_data: { text: "vor 50 Tagen" },
            name: { text: "Ihr Name" },
            name_placeholder: { text: "Wer macht diesen Kommentar?" },
            comment_placeholder: { text: "Kommentar hier eingeben" },
            button: { text: "Kommentieren" },
            no_comments: { text: "Noch keine Kommentare, fügen Sie Ihren hinzu!" },
          },
        },
        interactions: {
          like: { text: "Gefällt mir", plural: "Gefällt mir" },
          comment: { text: "Kommentar", plural: "Kommentare" },
          view: { text: "Ansicht", plural: "Ansichten" },
          share: { text: "Teilen", plural: "Geteilt" },
        },
        testimonials_section: {
          title: { text: "Testimonials" },
          call_to_add_testimonial: { text: "Fügen Sie hier Ihr Testimonial hinzu" },
          full_view: { text: "Vollansicht" },
        },
        coaches_section: {
          button: { text: "Hilfe erhalten" },
        },
        do_more: {
          title: {
            text: "Teilnehmende Gemeinschaften",
          },
        },
        events_section: {
          title: { text: "Veranstaltungen" },
          card: {
            online: { text: "Online" },
            both: { text: "Beides" },
            in_person: { text: "Persönlich" },
          },
        },
        why_section: {
          why: { text: "Warum" },
        },
        take_action_section: {
          title: { text: "Handeln" },
          coaches: {
            title: "Stellen Sie eine Frage",
            description: "Freiwillige aus der Gemeinschaft sind bereit, Fragen zu beantworten, egal ob groß oder klein",
            button: { text: "Hilfe bekommen" },
          },
          incentives: {
            title: "Zeig mir das Geld",
            description: "Es wird besser! Sehen Sie alle Anreize, die Ihnen zur Verfügung stehen.",
            button: { text: "Anreize" },
          },
          vendors: {
            title: "Finden Sie einen Anbieter",
            description: "Die entscheidende Frage - wer sollte Ihr Projekt anbieten?",
            button: { text: "Anbieter" },
          },
        },
        vendors_section: {
          title: { text: "Anbieter" },
        },
      },
    },

    one_testimonial_page: {
      loader: {
        text: "Testimonial-Details abrufen...",
      },
      sections: {
        call_to_add_testimonial: { text: "Fügen Sie hier Ihr Testimonial hinzu" },
        call_to_hide_testimonial: { text: "Testimonial-Formular ausblenden" },
        form: { title: { text: "Fügen Sie Ihr Testimonial hinzu" } },
        sidebar: {
          other_testimonials: { text: "Weitere Testimonials" },
          call_to_add_testimonial: { text: "Testimonial hinzufügen" },
          call_to_hide_testimonial: { text: "Formular ausblenden" },
        },
      },
    },
    one_event_page: {
      loader: {
        text: "Veranstaltungsdetails abrufen...",
      },
      sections: {
        card: { online: { text: "Online" }, both: { text: "Beide" }, in_person: { text: "Persönlich" } },
        call_to_download: { text: "In Ihren Kalender herunterladen" },
        apple_calendar: { text: "ICAL" },
        google_calendar: { text: "Google Calendar" },
        call_to_register: { text: "Registrieren/Beitreten" },
      },
    },
  },
  modals: {
    languageSelectionModal: {
      title: { text: "Wählen Sie eine Sprache" },
    },
    whereFrom: {
      title: { text: "Bitte sagen Sie uns, woher Sie kommen" },
      buttons: {
        no: { text: "NEIN" },
        submit: { text: "Okay, erledigt!" },
      },
    },
    preTestimonial: {
      title: { text: "Bevor Sie ein Testimonial hinzufügen, möchten wir Sie kennenlernen" },
      buttons: {
        continue: { text: "Fortfahren" },
        cancel: { text: "Abbrechen" },
      },
    },
    community_selection: {
      selection_label: { text: "In welcher Gemeinschaft leben Sie?" },
      text_after_selection: { text: "Wir leiten Sie basierend auf Ihrem Standort zu den richtigen Ressourcen -" },
      form: {
        zipcode: {
          text: "Postleitzahl",
          label: "Geben Sie Ihre Postleitzahl ein (Bearbeitbar)",
          placeholder: "Postleitzahl hier eingeben...",
        },
        community_name: { text: "Gemeinschaftsname", placeholder: "In welcher Gemeinschaft leben Sie?" },
      },
      buttons: {
        close: { text: "Schließen" },
        submit: { text: "Los geht's" },
      },
      success: { text: "Danke, dass Sie beigetreten sind!" },
    },
    join: {
      email: { text: "E-Mail", placeholder: "E-Mail hier eingeben..." },
      buttons: { cancel: { text: "Abbrechen" }, ok: { text: "Los geht's" } },
    },
    help: {
      buttons: { cancel: { text: "Abbrechen" }, ok: { text: "Los geht's" } },
      title: { text: "Hilfe erhalten" },
      selection_hint: { text: "Wir leiten Sie basierend auf Ihrem Standort zu den richtigen Ressourcen" },
    },
  },
};

export const SPANISH = {
  inPreview: {
    button: { text: "Modo de Vista Previa" },
    notice: {
      text: "aún no está publicado. Los administradores siguen trabajando en ello. Por favor, vuelva más tarde cuando esté completo...",
    },
  },
  forms: {
    testimonials: {
      title: { text: "Título*", placeholder: "Ingrese el título del testimonio...", label: "¡Cuéntenos su historia!" },
      image: {
        label: "Incluya una imagen en su testimonio",
        text: "Elegir archivo",
        placeholder: "Ningún archivo seleccionado",
      },
      community: { label: "Seleccione su comunidad", placeholder: "---Seleccione su comunidad---" },
      technology: {
        label: "¿Bajo qué tecnología está este testimonio?",
        placeholder: "---Seleccione la tecnología---",
      },
      description: { placeholder: "Comience a contar su historia aquí..." },
      buttons: { cancel: { text: "Cancelar" }, submit: { text: "Enviar" } },
    },
  },

  loader: {
    text: "Obteniendo detalles de la campaña...",
  },
  share: { text: "Compartir" },
  footer: {
    modal: { title: { prefix: "Seguir" }, cancel: { text: "Cancelar" }, ok: { text: "Suscribirse" } },
    news_letter: {
      subscribe_button: { text: "Suscribirse a nuestro Boletín" },
      subscribe_message: { text: "Ya estás suscrito con " },
    },
    quick_links: { text: "Enlaces rápidos" },
  },
  navbar: {
    home: { text: "Inicio" },
    tech: { text: "Tecnologías" },
    coaches: { text: "Entrenadores" },
    events: { text: "Eventos" },
    vendors: { text: "Vendedores" },
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
          text: "Contacto principal",
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
          call_to_add_testimonial: { text: "Agrega tu testimonio aquí" },
          call_to_hide_testimonial: { text: "Ocultar formulario de testimonio" },
          call_to_filter: { text: "Filtrar testimonios por" },
          full_view: { text: "Vista completa" },
        },
        events_section: {
          title: { text: "Testimonios" },
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
          button: { text: "Obtener actualizaciones" },
          description: { text: "Obtener actualizaciones sobre" },
          title: { text: "Obtener actualizaciones sobre" },
          confirm_button: { text: "Obtener actualizaciones" },
          cancel_button: { text: "Cancelar" },
        },
        comments: {
          title: { text: "Comentarios" },
          see_more_trunc: { text: "Ver más" },
          see_more: { text: "Ver más comentarios" },
          call_to_add: { text: "Agregar un comentario" },
          modal: {
            title: "Leer comentarios o agregar el tuyo",
            relative_data: { text: "hace 50 días" },
            name: { text: "Tu nombre" },
            name_placeholder: { text: "¿Quién está haciendo este comentario?" },
            comment_placeholder: { text: "Escribe tu comentario aquí" },
            button: { text: "Comentar" },
            no_comments: { text: "Aún no hay comentarios, ¡agrega el tuyo!" },
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
          call_to_add_testimonial: { text: "Agrega tu testimonio aquí" },
          full_view: { text: "Vista completa" },
        },
        coaches_section: {
          button: { text: "Obtener ayuda" },
        },
        do_more: {
          title: {
            text: "Comunidades Participantes",
          },
        },
        events_section: {
          title: { text: "Eventos" },
          card: {
            online: { text: "En línea" },
            both: { text: "Ambos" },
            in_person: { text: "En persona" },
          },
        },
        why_section: {
          why: { text: "Por qué" },
        },
        take_action_section: {
          title: { text: "Tomar Acción" },
          coaches: {
            title: "Haz una pregunta",
            description: "Voluntarios de la comunidad están listos para responder preguntas, grandes o pequeñas",
            button: { text: "Obtener Ayuda" },
          },
          incentives: {
            title: "Enséñame el dinero",
            description: "¡Mejora! Vea todos los incentivos disponibles para usted.",
            button: { text: "Incentivos" },
          },
          vendors: {
            title: "Encuentra un Vendedor",
            description: "La pregunta crítica - ¿quién debería cotizar su proyecto?",
            button: { text: "Vendedores" },
          },
        },
        vendors_section: {
          title: { text: "Vendedores" },
        },
      },
    },

    one_testimonial_page: {
      loader: {
        text: "Obteniendo detalles del testimonio...",
      },
      sections: {
        call_to_add_testimonial: { text: "Agrega tu testimonio aquí" },
        call_to_hide_testimonial: { text: "Ocultar formulario de testimonio" },
        form: { title: { text: "Agrega tu testimonio" } },
        sidebar: {
          other_testimonials: { text: "Otros testimonios" },
          call_to_add_testimonial: { text: "Agregar testimonio" },
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
    languageSelectionModal: {
      title: { text: "Elija un idioma" },
    },
    whereFrom: {
      title: { text: "Por favor, díganos de dónde es" },
      buttons: {
        no: { text: "NO" },
        submit: { text: "¡Vale, listo!" },
      },
    },
    preTestimonial: {
      title: { text: "Antes de agregar un testimonio, nos gustaría conocerte" },
      buttons: {
        continue: { text: "Continuar" },
        cancel: { text: "Cancelar" },
      },
    },
    community_selection: {
      selection_label: { text: "¿En qué comunidad vives?" },
      text_after_selection: { text: "Te dirigiremos a los recursos adecuados según tu ubicación -" },
      form: {
        zipcode: {
          text: "Código postal",
          label: "Introduce tu código postal (Editable)",
          placeholder: "Introduce el código postal aquí...",
        },
        community_name: { text: "Nombre de la comunidad", placeholder: "¿En qué comunidad vives?" },
      },
      buttons: {
        close: { text: "Cerrar" },
        submit: { text: "Vamos" },
      },
      success: { text: "¡Gracias por unirte!" },
    },
    join: {
      email: { text: "Correo electrónico", placeholder: "Introduce tu correo electrónico aquí..." },
      buttons: { cancel: { text: "Cancelar" }, ok: { text: "Vamos" } },
    },
    help: {
      buttons: { cancel: { text: "Cancelar" }, ok: { text: "Vamos" } },
      title: { text: "Obtener ayuda" },
      selection_hint: { text: "Te dirigiremos a los recursos adecuados según tu ubicación" },
    },
  },
};

export const FRENCH = {
  inPreview: {
    button: { text: "Mode Prévisualisation" },
    notice: {
      text: "n'est pas encore publié. Les administrateurs y travaillent encore. Veuillez revenir plus tard lorsqu'il sera terminé...",
    },
  },
  forms: {
    testimonials: {
      title: {
        text: "Titre*",
        placeholder: "Entrez le titre du témoignage...",
        label: "Racontez-nous votre histoire!",
      },
      image: {
        label: "Inclure une image dans votre témoignage",
        text: "Choisir un fichier",
        placeholder: "Aucun fichier choisi",
      },
      community: { label: "Sélectionnez votre communauté", placeholder: "---Sélectionnez votre communauté---" },
      technology: {
        label: "Quelle technologie concerne ce témoignage?",
        placeholder: "---Sélectionnez la technologie---",
      },
      description: { placeholder: "Commencez à raconter votre histoire ici..." },
      buttons: { cancel: { text: "Annuler" }, submit: { text: "Soumettre" } },
    },
  },

  loader: {
    text: "Récupération des détails de la campagne...",
  },
  share: { text: "Partager" },
  footer: {
    modal: { title: { prefix: "Suivre" }, cancel: { text: "Annuler" }, ok: { text: "S'abonner" } },
    news_letter: {
      subscribe_button: { text: "S'abonner à notre Newsletter" },
      subscribe_message: { text: "Vous êtes déjà abonné avec " },
    },
    quick_links: { text: "Liens rapides" },
  },
  navbar: {
    home: { text: "Accueil" },
    tech: { text: "Technologies" },
    coaches: { text: "Entraîneurs" },
    events: { text: "Événements" },
    vendors: { text: "Vendeurs" },
    Deals: { text: "Offres" },
  },
  pages: {
    homepage: {
      share: {
        button: { copied: { text: "Copié!" }, copy: { text: "Copier le lien" } },
        title: { text: "Partager la campagne" },
        hint: { text: "Vous pouvez copier le lien et le partager" },
        instruction: { text: "Veuillez sélectionner une plateforme pour partager cette technologie" },
      },
      sections: {
        key_contact: {
          text: "Contact principal",
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
            text: "Faites défiler de gauche à droite pour voir plus de témoignages, ou utilisez les boutons fléchés (en haut à droite) pour faire défiler",
          },
          title: { text: "Témoignages" },
          call_to_add_testimonial: { text: "Ajoutez votre témoignage ici" },
          call_to_hide_testimonial: { text: "Masquer le formulaire de témoignage" },
          call_to_filter: { text: "Filtrer les témoignages par" },
          full_view: { text: "Vue complète" },
        },
        events_section: {
          title: { text: "Témoignages" },
          scrollable: {
            text: "Faites défiler de gauche à droite pour voir plus d'événements, ou utilisez les boutons fléchés (en haut à droite) pour faire défiler",
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
        button: { copied: { text: "Copié!" }, copy: { text: "Copier le lien" } },
        title: { text: "Partager" },
        hint: { text: "Vous pouvez copier le lien et le partager" },
        instruction: { text: "Veuillez sélectionner une plateforme pour partager cette technologie" },
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
            title: "Lisez les commentaires ou ajoutez le vôtre",
            relative_data: { text: "il y a 50 jours" },
            name: { text: "Votre nom" },
            name_placeholder: { text: "Qui fait ce commentaire" },
            comment_placeholder: { text: "Tapez votre commentaire ici" },
            button: { text: "Commenter" },
            no_comments: { text: "Pas encore de commentaires, ajoutez le vôtre!" },
          },
        },
        interactions: {
          like: { text: "J'aime", plural: "J'aime" },
          comment: { text: "Commentaire", plural: "Commentaires" },
          view: { text: "Vue", plural: "Vues" },
          share: { text: "Partager", plural: "Partages" },
        },
        testimonials_section: {
          title: { text: "Témoignages" },
          call_to_add_testimonial: { text: "Ajoutez votre témoignage ici" },
          full_view: { text: "Vue complète" },
        },

        coaches_section: {
          button: { text: "Obtenir de l'aide" },
        },
        do_more: {
          title: {
            text: "Communautés Participantes",
          },
        },
        events_section: {
          title: { text: "Événements" },
          card: {
            online: { text: "En ligne" },
            both: { text: "Les deux" },
            in_person: { text: "En personne" },
          },
        },
        why_section: {
          why: { text: "Pourquoi" },
        },
        take_action_section: {
          title: { text: "Agir" },
          coaches: {
            title: "Poser une question",
            description: "Des bénévoles communautaires sont prêts à répondre à vos questions, grandes ou petites",
            button: { text: "Obtenir de l'aide" },
          },
          incentives: {
            title: "Montrez-moi l'argent",
            description: "Ça s'améliore! Voir tous les incitatifs disponibles pour vous.",
            button: { text: "Incitatifs" },
          },
          vendors: {
            title: "Trouver un Vendeur",
            description: "La question cruciale - qui devrait soumissionner votre projet?",
            button: { text: "Vendeurs" },
          },
        },
        vendors_section: {
          title: { text: "Vendeurs" },
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
    languageSelectionModal: {
      title: { text: "Choisissez une langue" },
    },
    whereFrom: {
      title: { text: "Veuillez nous dire d'où vous venez" },
      buttons: {
        no: { text: "NON" },
        submit: { text: "D'accord, terminé!" },
      },
    },
    preTestimonial: {
      title: { text: "Avant d'ajouter un témoignage, nous aimerions vous connaître" },
      buttons: {
        continue: { text: "Continuer" },
        cancel: { text: "Annuler" },
      },
    },
    community_selection: {
      selection_label: { text: "Dans quelle communauté vivez-vous?" },
      text_after_selection: {
        text: "Nous vous dirigerons vers les bonnes ressources en fonction de votre localisation -",
      },
      form: {
        zipcode: {
          text: "Code postal",
          label: "Entrez votre code postal (Modifiable)",
          placeholder: "Entrez le code postal ici...",
        },
        community_name: { text: "Nom de la communauté", placeholder: "Dans quelle communauté vivez-vous?" },
      },
      buttons: {
        close: { text: "Fermer" },
        submit: { text: "Allons-y" },
      },
      success: { text: "Merci de nous rejoindre!" },
    },
    join: {
      email: { text: "E-mail", placeholder: "Entrez votre e-mail ici..." },
      buttons: { cancel: { text: "Annuler" }, ok: { text: "Allons-y" } },
    },
    help: {
      buttons: { cancel: { text: "Annuler" }, ok: { text: "Allons-y" } },
      title: { text: "Obtenir de l'aide" },
      selection_hint: { text: "Nous vous dirigerons vers les bonnes ressources en fonction de votre localisation" },
    },
  },
};

export const CHINESE = {
  inPreview: {
    button: { text: "预览模式" },
    notice: {
      text: "尚未发布。管理员仍在处理。请稍后再回来查看完成的内容...",
    },
  },
  forms: {
    testimonials: {
      title: { text: "標題*", placeholder: "輸入推薦書的標題...", label: "告訴我們你的故事!" },
      image: { label: "在你的推薦書中包含圖片", text: "選擇文件", placeholder: "未選擇文件" },
      community: { label: "選擇你的社區", placeholder: "---選擇你的社區---" },
      technology: { label: "此推薦書是針對哪項技術？", placeholder: "---選擇技術---" },
      description: { placeholder: "從這裡開始講述你的故事..." },
      buttons: { cancel: { text: "取消" }, submit: { text: "提交" } },
    },
  },

  loader: {
    text: "正在获取活动详情...",
  },
  share: { text: "分享" },
  footer: {
    modal: { title: { prefix: "关注" }, cancel: { text: "取消" }, ok: { text: "订阅" } },
    news_letter: {
      subscribe_button: { text: "订阅我们的通讯" },
      subscribe_message: { text: "你已经订阅了 " },
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
        hint: { text: "你可以复制链接并分享" },
        instruction: { text: "请选择你想要分享此技术的平台" },
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
            description: "连接你的社区，发现其他行动",
          },
        },
        testimonials_section: {
          scrollable: {
            text: "从左到右滚动查看更多评价，或使用右上角的箭头按钮滚动",
          },
          title: { text: "评价" },
          call_to_add_testimonial: { text: "在此添加你的评价" },
          call_to_hide_testimonial: { text: "隐藏评价表单" },
          call_to_filter: { text: "筛选评价" },
          full_view: { text: "完整视图" },
        },
        events_section: {
          title: { text: "活动" },
          scrollable: {
            text: "从左到右滚动查看更多活动，或使用右上角的箭头按钮滚动",
          },
          call_to_filter: { text: "筛选评价" },
          card: { online: { text: "在线" }, both: { text: "两者" }, in_person: { text: "现场" } },
        },
        coaches_section: {
          call_to_filter: { text: "筛选评价" },
          get_help: { text: "获取帮助" },
          help_modal: { title: "获取帮助" },
        },
      },
    },
    one_technology_page: {
      share: {
        button: { copied: { text: "已复制!" }, copy: { text: "复制链接" } },
        title: { text: "分享" },
        hint: { text: "你可以复制链接并分享" },
        instruction: { text: "请选择你想要分享此技术的平台" },
      },
      loader: {
        text: "正在获取技术详情...",
      },
      sections: {
        see_more: { text: "查看更多..." },
        see_less: { text: "收起..." },
        get_updates: {
          button: { text: "获取更新" },
          description: { text: "获取关于的更新" },
          title: { text: "获取关于的更新" },
          confirm_button: { text: "获取更新" },
          cancel_button: { text: "取消" },
        },
        comments: {
          title: { text: "评论" },
          see_more_trunc: { text: "查看更多" },
          see_more: { text: "查看更多评论" },
          call_to_add: { text: "添加评论" },
          modal: {
            title: "阅读评论或添加你的评论",
            relative_data: { text: "50天前" },
            name: { text: "你的名字" },
            name_placeholder: { text: "谁在发表评论?" },
            comment_placeholder: { text: "在此输入评论" },
            button: { text: "评论" },
            no_comments: { text: "还没有评论，添加你的评论!" },
          },
        },
        interactions: {
          like: { text: "赞", plural: "赞" },
          comment: { text: "评论", plural: "评论" },
          view: { text: "查看", plural: "查看" },
          share: { text: "分享", plural: "分享" },
        },
        testimonials_section: {
          title: { text: "评价" },
          call_to_add_testimonial: { text: "在此添加你的评价" },
          full_view: { text: "完整视图" },
        },

        coaches_section: {
          button: { text: "获取帮助" },
        },
        do_more: {
          title: {
            text: "参与社区",
          },
        },
        events_section: {
          title: { text: "活动" },
          card: {
            online: { text: "在线" },
            both: { text: "两者都有" },
            in_person: { text: "亲自" },
          },
        },
        why_section: {
          why: { text: "为什么" },
        },
        take_action_section: {
          title: { text: "采取行动" },
          coaches: {
            title: "问一个问题",
            description: "社区志愿者准备回答大大小小的问题",
            button: { text: "获取帮助" },
          },
          incentives: {
            title: "给我看钱",
            description: "会更好！查看所有可用的激励措施。",
            button: { text: "激励措施" },
          },
          vendors: {
            title: "找供应商",
            description: "关键问题 - 谁应该为您的项目报价？",
            button: { text: "供应商" },
          },
        },
        vendors_section: {
          title: { text: "供应商" },
        },
      },
    },

    one_testimonial_page: {
      loader: {
        text: "正在获取评价详情...",
      },
      sections: {
        call_to_add_testimonial: { text: "在此添加你的评价" },
        call_to_hide_testimonial: { text: "隐藏评价表单" },
        form: { title: { text: "添加你的评价" } },
        sidebar: {
          other_testimonials: { text: "其他评价" },
          call_to_add_testimonial: { text: "添加评价" },
          call_to_hide_testimonial: { text: "隐藏表单" },
        },
      },
    },
    one_event_page: {
      loader: {
        text: "正在获取活动详情...",
      },
      sections: {
        card: { online: { text: "在线" }, both: { text: "两者" }, in_person: { text: "现场" } },
        call_to_download: { text: "下载到你的日历" },
        apple_calendar: { text: "ICAL" },
        google_calendar: { text: "Google 日历" },
        call_to_register: { text: "注册/加入" },
      },
    },
  },
  modals: {
    languageSelectionModal: {
      title: { text: "选择一种语言" },
    },
    whereFrom: {
      title: { text: "请告诉我们你来自哪里" },
      buttons: {
        no: { text: "不" },
        submit: { text: "好的，完成了!" },
      },
    },
    preTestimonial: {
      title: { text: "在添加推荐之前，我们想了解您" },
      buttons: {
        continue: { text: "继续" },
        cancel: { text: "取消" },
      },
    },
    community_selection: {
      selection_label: { text: "你居住在哪个社区?" },
      text_after_selection: { text: "我们将根据你的位置为你指引到正确的资源 -" },
      form: {
        zipcode: {
          text: "邮政编码",
          label: "输入你的邮政编码（可编辑）",
          placeholder: "在此输入邮政编码...",
        },
        community_name: { text: "社区名称", placeholder: "你居住在哪个社区?" },
      },
      buttons: {
        close: { text: "关闭" },
        submit: { text: "走吧" },
      },
      success: { text: "感谢你加入!" },
    },
    join: {
      email: { text: "电子邮件", placeholder: "在此输入你的电子邮件..." },
      buttons: { cancel: { text: "取消" }, ok: { text: "走吧" } },
    },
    help: {
      buttons: { cancel: { text: "取消" }, ok: { text: "走吧" } },
      title: { text: "获取帮助" },
      selection_hint: { text: "我们将根据你的位置为你指引到正确的资源" },
    },
  },
};

export const PORTUGUESE = {
  inPreview: {
    button: { text: "Modo de Pré-visualização" },
    notice: {
      text: "ainda não foi publicado. Os administradores ainda estão trabalhando nisso. Por favor, volte mais tarde quando estiver completo...",
    },
  },
  forms: {
    testimonials: {
      title: { text: "Título*", placeholder: "Insira o título do depoimento...", label: "Conte-nos sua história!" },
      image: {
        label: "Inclua uma imagem no seu depoimento",
        text: "Escolher arquivo",
        placeholder: "Nenhum arquivo escolhido",
      },
      community: { label: "Selecione sua comunidade", placeholder: "---Selecione sua comunidade---" },
      technology: { label: "A qual tecnologia pertence este depoimento?", placeholder: "---Selecione a tecnologia---" },
      description: { placeholder: "Comece a contar sua história aqui..." },
      buttons: { cancel: { text: "Cancelar" }, submit: { text: "Enviar" } },
    },
  },

  loader: {
    text: "Buscando detalhes da campanha...",
  },
  share: { text: "Compartilhar" },
  footer: {
    modal: { title: { prefix: "Seguir" }, cancel: { text: "Cancelar" }, ok: { text: "Assinar" } },
    news_letter: {
      subscribe_button: { text: "Assine nossa Newsletter" },
      subscribe_message: { text: "Você já se inscreveu com " },
    },
    quick_links: { text: "Links Rápidos" },
  },
  navbar: {
    home: { text: "Início" },
    tech: { text: "Tecnologias" },
    coaches: { text: "Treinadores" },
    events: { text: "Eventos" },
    vendors: { text: "Fornecedores" },
    Deals: { text: "Ofertas" },
  },
  pages: {
    homepage: {
      share: {
        button: { copied: { text: "Copiado!" }, copy: { text: "Copiar Link" } },
        title: { text: "Compartilhar Campanha" },
        hint: { text: "Você pode copiar o link e compartilhá-lo" },
        instruction: { text: "Selecione uma plataforma na qual você gostaria de compartilhar esta tecnologia" },
      },
      sections: {
        key_contact: {
          text: "Contato Principal",
        },

        about_box: {
          button: "Saiba Mais",
        },
        getting_started_section: {
          quote: { text: "Citação" },
          coach: { text: "Treinador" },
          learn_more: { text: "Saiba Mais" },
          communities: {
            text: "Comunidades",
            title: "Comunidades",
            description: "Conecte-se com sua comunidade e confira outras ações",
          },
        },
        testimonials_section: {
          scrollable: {
            text: "Role da esquerda para a direita para ver mais depoimentos, ou use os botões de seta (canto superior direito) para rolar",
          },
          title: { text: "Depoimentos" },
          call_to_add_testimonial: { text: "Adicione seu depoimento aqui" },
          call_to_hide_testimonial: { text: "Ocultar formulário de depoimento" },
          call_to_filter: { text: "Filtrar depoimentos por" },
          full_view: { text: "Visualização Completa" },
        },
        events_section: {
          title: { text: "Eventos" },
          scrollable: {
            text: "Role da esquerda para a direita para ver mais eventos, ou use os botões de seta (canto superior direito) para rolar",
          },
          call_to_filter: { text: "Filtrar depoimentos por" },
          card: { online: { text: "Online" }, both: { text: "Ambos" }, in_person: { text: "Presencial" } },
        },
        coaches_section: {
          call_to_filter: { text: "Filtrar depoimentos por" },
          get_help: { text: "Obter Ajuda" },
          help_modal: { title: "Obter Ajuda" },
        },
      },
    },
    one_technology_page: {
      share: {
        button: { copied: { text: "Copiado!" }, copy: { text: "Copiar Link" } },
        title: { text: "Compartilhar" },
        hint: { text: "Você pode copiar o link e compartilhá-lo" },
        instruction: { text: "Selecione uma plataforma na qual você gostaria de compartilhar esta tecnologia" },
      },
      loader: {
        text: "Buscando detalhes da tecnologia...",
      },
      sections: {
        see_more: { text: "Ver mais..." },
        see_less: { text: "Ver menos..." },
        get_updates: {
          button: { text: "Receber Atualizações" },
          description: { text: "Receber atualizações sobre" },
          title: { text: "Receber atualizações sobre" },
          confirm_button: { text: "Receber Atualizações" },
          cancel_button: { text: "Cancelar" },
        },
        comments: {
          title: { text: "Comentários" },
          see_more_trunc: { text: "Ver mais" },
          see_more: { text: "Ver mais comentários" },
          call_to_add: { text: "Adicionar um comentário" },
          modal: {
            title: "Leia comentários ou adicione o seu",
            relative_data: { text: "50 dias atrás" },
            name: { text: "Seu nome" },
            name_placeholder: { text: "Quem está fazendo este comentário?" },
            comment_placeholder: { text: "Digite o comentário aqui" },
            button: { text: "Comentar" },
            no_comments: { text: "Ainda não há comentários, adicione o seu!" },
          },
        },
        interactions: {
          like: { text: "Curtir", plural: "Curtidas" },
          comment: { text: "Comentar", plural: "Comentários" },
          view: { text: "Visualizar", plural: "Visualizações" },
          share: { text: "Compartilhar", plural: "Compartilhamentos" },
        },
        testimonials_section: {
          title: { text: "Depoimentos" },
          call_to_add_testimonial: { text: "Adicione seu depoimento aqui" },
          full_view: { text: "Visualização Completa" },
        },
        coaches_section: {
          button: { text: "Obter Ajuda" },
        },
        do_more: {
          title: {
            text: "Comunidades Participantes",
          },
        },
        events_section: {
          title: { text: "Eventos" },
          card: {
            online: { text: "Online" },
            both: { text: "Ambos" },
            in_person: { text: "Presencial" },
          },
        },
        why_section: {
          why: { text: "Por quê" },
        },
        take_action_section: {
          title: { text: "Tomar Ação" },
          coaches: {
            title: "Faça uma pergunta",
            description: "Voluntários da comunidade estão prontos para responder perguntas, grandes ou pequenas",
            button: { text: "Obter Ajuda" },
          },
          incentives: {
            title: "Mostre-me o dinheiro",
            description: "Fica melhor! Veja todos os incentivos disponíveis para você.",
            button: { text: "Incentivos" },
          },
          vendors: {
            title: "Encontre um Fornecedor",
            description: "A questão crítica - quem deve cotar seu projeto?",
            button: { text: "Fornecedores" },
          },
        },
        vendors_section: {
          title: { text: "Fornecedores" },
        },
      },
    },

    one_testimonial_page: {
      loader: {
        text: "Buscando detalhes do depoimento...",
      },
      sections: {
        call_to_add_testimonial: { text: "Adicione seu depoimento aqui" },
        call_to_hide_testimonial: { text: "Ocultar formulário de depoimento" },
        form: { title: { text: "Adicione seu depoimento" } },
        sidebar: {
          other_testimonials: { text: "Outros Depoimentos" },
          call_to_add_testimonial: { text: "Adicionar Depoimento" },
          call_to_hide_testimonial: { text: "Ocultar Formulário" },
        },
      },
    },
    one_event_page: {
      loader: {
        text: "Buscando detalhes do evento...",
      },
      sections: {
        card: { online: { text: "Online" }, both: { text: "Ambos" }, in_person: { text: "Presencial" } },
        call_to_download: { text: "Baixar para o seu calendário" },
        apple_calendar: { text: "ICAL" },
        google_calendar: { text: "Google Calendar" },
        call_to_register: { text: "Registrar/Participar" },
      },
    },
  },
  modals: {
    languageSelectionModal: {
      title: { text: "Escolha um Idioma" },
    },
    whereFrom: {
      title: { text: "Por favor, diga-nos de onde você é" },
      buttons: {
        no: { text: "NÃO" },
        submit: { text: "Ok, pronto!" },
      },
    },
    preTestimonial: {
      title: { text: "Antes de adicionar um depoimento, gostaríamos de conhecê-lo" },
      buttons: {
        continue: { text: "Continuar" },
        cancel: { text: "Cancelar" },
      },
    },
    community_selection: {
      selection_label: { text: "Em qual comunidade você mora?" },
      text_after_selection: { text: "Nós direcionaremos você para os recursos corretos com base na sua localização -" },
      form: {
        zipcode: {
          text: "CEP",
          label: "Digite seu CEP (Editável)",
          placeholder: "Digite o CEP aqui...",
        },
        community_name: { text: "Nome da Comunidade", placeholder: "Em qual comunidade você mora?" },
      },
      buttons: {
        close: { text: "Fechar" },
        submit: { text: "Vamos lá" },
      },
      success: { text: "Obrigado por se juntar a nós!" },
    },
    join: {
      email: { text: "Email", placeholder: "Digite o email aqui..." },
      buttons: { cancel: { text: "Cancelar" }, ok: { text: "Vamos lá" } },
    },
    help: {
      buttons: { cancel: { text: "Cancelar" }, ok: { text: "Vamos lá" } },
      title: { text: "Obter Ajuda" },
      selection_hint: { text: "Nós direcionaremos você para os recursos corretos com base na sua localização" },
    },
  },
};

export const ITALIAN = {
  inPreview: {
    button: { text: "Modalità Anteprima" },
    notice: {
      text: "non è ancora pubblicato. Gli amministratori ci stanno ancora lavorando. Torna più tardi quando sarà completo...",
    },
  },
  forms: {
    testimonials: {
      title: {
        text: "Titolo*",
        placeholder: "Inserisci il titolo del testimoniale...",
        label: "Raccontaci la tua storia!",
      },
      image: {
        label: "Includi un'immagine nel tuo testimoniale",
        text: "Scegli file",
        placeholder: "Nessun file scelto",
      },
      community: { label: "Seleziona la tua comunità", placeholder: "---Seleziona la tua comunità---" },
      technology: {
        label: "Quale tecnologia riguarda questo testimoniale?",
        placeholder: "---Seleziona la tecnologia---",
      },
      description: { placeholder: "Inizia a raccontare la tua storia qui..." },
      buttons: { cancel: { text: "Annulla" }, submit: { text: "Invia" } },
    },
  },

  loader: {
    text: "Recupero dei dettagli della campagna...",
  },
  share: { text: "Condividi" },
  footer: {
    modal: { title: { prefix: "Segui" }, cancel: { text: "Annulla" }, ok: { text: "Iscriviti" } },
    news_letter: {
      subscribe_button: { text: "Iscriviti alla nostra Newsletter" },
      subscribe_message: { text: "Ti sei già iscritto con " },
    },
    quick_links: { text: "Link Rapidi" },
  },
  navbar: {
    home: { text: "Home" },
    tech: { text: "Tecnologie" },
    coaches: { text: "Coach" },
    events: { text: "Eventi" },
    vendors: { text: "Fornitori" },
    Deals: { text: "Offerte" },
  },
  pages: {
    homepage: {
      share: {
        button: { copied: { text: "Copiato!" }, copy: { text: "Copia Link" } },
        title: { text: "Condividi Campagna" },
        hint: { text: "Puoi copiare il link e condividerlo" },
        instruction: { text: "Seleziona una piattaforma su cui desideri condividere questa tecnologia" },
      },
      sections: {
        key_contact: {
          text: "Contatto Principale",
        },

        about_box: {
          button: "Scopri di più",
        },
        getting_started_section: {
          quote: { text: "Citazione" },
          coach: { text: "Coach" },
          learn_more: { text: "Scopri di più" },
          communities: {
            text: "Comunità",
            title: "Comunità",
            description: "Connettiti con la tua comunità e scopri altre azioni",
          },
        },
        testimonials_section: {
          scrollable: {
            text: "Scorri da sinistra a destra per vedere più testimonianze, o usa i pulsanti freccia (in alto a destra) per scorrere",
          },
          title: { text: "Testimonianze" },
          call_to_add_testimonial: { text: "Aggiungi qui la tua testimonianza" },
          call_to_hide_testimonial: { text: "Nascondi il modulo di testimonianza" },
          call_to_filter: { text: "Filtra le testimonianze per" },
          full_view: { text: "Vista Completa" },
        },
        events_section: {
          title: { text: "Eventi" },
          scrollable: {
            text: "Scorri da sinistra a destra per vedere più eventi, o usa i pulsanti freccia (in alto a destra) per scorrere",
          },
          call_to_filter: { text: "Filtra le testimonianze per" },
          card: { online: { text: "Online" }, both: { text: "Entrambi" }, in_person: { text: "In presenza" } },
        },
        coaches_section: {
          call_to_filter: { text: "Filtra le testimonianze per" },
          get_help: { text: "Ottieni Aiuto" },
          help_modal: { title: "Ottieni Aiuto" },
        },
      },
    },
    one_technology_page: {
      share: {
        button: { copied: { text: "Copiato!" }, copy: { text: "Copia Link" } },
        title: { text: "Condividi" },
        hint: { text: "Puoi copiare il link e condividerlo" },
        instruction: { text: "Seleziona una piattaforma su cui desideri condividere questa tecnologia" },
      },
      loader: {
        text: "Recupero dei dettagli della tecnologia...",
      },
      sections: {
        see_more: { text: "Vedi di più..." },
        see_less: { text: "Vedi meno..." },
        get_updates: {
          button: { text: "Ricevi Aggiornamenti" },
          description: { text: "Ricevi aggiornamenti su" },
          title: { text: "Ricevi aggiornamenti su" },
          confirm_button: { text: "Ricevi Aggiornamenti" },
          cancel_button: { text: "Annulla" },
        },
        comments: {
          title: { text: "Commenti" },
          see_more_trunc: { text: "Vedi di più" },
          see_more: { text: "Vedi più commenti" },
          call_to_add: { text: "Aggiungi un commento" },
          modal: {
            title: "Leggi i commenti o aggiungi il tuo",
            relative_data: { text: "50 giorni fa" },
            name: { text: "Il tuo nome" },
            name_placeholder: { text: "Chi sta facendo questo commento" },
            comment_placeholder: { text: "Scrivi qui il commento" },
            button: { text: "Commenta" },
            no_comments: { text: "Ancora nessun commento, aggiungi il tuo!" },
          },
        },
        interactions: {
          like: { text: "Mi piace", plural: "Mi piace" },
          comment: { text: "Commento", plural: "Commenti" },
          view: { text: "Visualizzazione", plural: "Visualizzazioni" },
          share: { text: "Condividi", plural: "Condivisioni" },
        },
        testimonials_section: {
          title: { text: "Testimonianze" },
          call_to_add_testimonial: { text: "Aggiungi qui la tua testimonianza" },
          full_view: { text: "Vista Completa" },
        },
        coaches_section: {
          button: { text: "Ottieni Aiuto" },
        },
        do_more: {
          title: {
            text: "Comunità Partecipanti",
          },
        },
        events_section: {
          title: { text: "Eventi" },
          card: {
            online: { text: "Online" },
            both: { text: "Entrambi" },
            in_person: { text: "Di persona" },
          },
        },
        why_section: {
          why: { text: "Perché" },
        },
        take_action_section: {
          title: { text: "Agire" },
          coaches: {
            title: "Fai una domanda",
            description: "I volontari della comunità sono pronti a rispondere a domande, grandi o piccole",
            button: { text: "Ricevi aiuto" },
          },
          incentives: {
            title: "Mostrami i soldi",
            description: "Migliora! Vedi tutti gli incentivi disponibili per te.",
            button: { text: "Incentivi" },
          },
          vendors: {
            title: "Trova un Fornitore",
            description: "La domanda critica - chi dovrebbe fare un preventivo per il tuo progetto?",
            button: { text: "Fornitori" },
          },
        },
        vendors_section: {
          title: { text: "Fornitori" },
        },
      },
    },

    one_testimonial_page: {
      loader: {
        text: "Recupero dei dettagli della testimonianza...",
      },
      sections: {
        call_to_add_testimonial: { text: "Aggiungi qui la tua testimonianza" },
        call_to_hide_testimonial: { text: "Nascondi il modulo di testimonianza" },
        form: { title: { text: "Aggiungi la tua testimonianza" } },
        sidebar: {
          other_testimonials: { text: "Altre Testimonianze" },
          call_to_add_testimonial: { text: "Aggiungi Testimonianza" },
          call_to_hide_testimonial: { text: "Nascondi Modulo" },
        },
      },
    },
    one_event_page: {
      loader: {
        text: "Recupero dei dettagli dell'evento...",
      },
      sections: {
        card: { online: { text: "Online" }, both: { text: "Entrambi" }, in_person: { text: "In presenza" } },
        call_to_download: { text: "Scarica nel tuo calendario" },
        apple_calendar: { text: "ICAL" },
        google_calendar: { text: "Google Calendar" },
        call_to_register: { text: "Registrati/Partecipa" },
      },
    },
  },
  modals: {
    languageSelectionModal: {
      title: { text: "Scegli una Lingua" },
    },
    whereFrom: {
      title: { text: "Per favore, dicci da dove vieni" },
      buttons: {
        no: { text: "NO" },
        submit: { text: "Ok, fatto!" },
      },
    },
    preTestimonial: {
      title: { text: "Prima di aggiungere una testimonianza, vorremmo conoscerti" },
      buttons: {
        continue: { text: "Continua" },
        cancel: { text: "Annulla" },
      },
    },
    community_selection: {
      selection_label: { text: "In quale comunità vivi?" },
      text_after_selection: { text: "Ti indirizzeremo alle risorse corrette in base alla tua posizione -" },
      form: {
        zipcode: {
          text: "CAP",
          label: "Inserisci il tuo CAP (Modificabile)",
          placeholder: "Inserisci il CAP qui...",
        },
        community_name: { text: "Nome della Comunità", placeholder: "In quale comunità vivi?" },
      },
      buttons: {
        close: { text: "Chiudi" },
        submit: { text: "Andiamo" },
      },
      success: { text: "Grazie per esserti unito a noi!" },
    },
    join: {
      email: { text: "Email", placeholder: "Inserisci qui l'email..." },
      buttons: { cancel: { text: "Annulla" }, ok: { text: "Andiamo" } },
    },
    help: {
      buttons: { cancel: { text: "Annulla" }, ok: { text: "Andiamo" } },
      title: { text: "Ottieni Aiuto" },
      selection_hint: { text: "Ti indirizzeremo alle risorse corrette in base alla tua posizione" },
    },
  },
};

export type NavigationOption = {
  url: string;
  name: string;
  icon: string;
  active?: boolean;
};

export type Options = {
  name: string;
  routes: NavigationOption[];
};

export const options: Options[] = [
  {
    name: "servicios",
    routes: [
      {
        url: "/main",
        name: "Dashboard",
        icon: "tabler:layout-dashboard",
      },
      {
        url: "/main/brand",
        name: "Marcas",
        icon: "tabler:brand-adobe-xd",
      },
      {
        url: "/main/products",
        name: "Mis Productos",
        icon: "fluent-mdl2:product",
        active: false,
      },
    ],
  },
  {
    name: "Ajustes",
    routes: [
      {
        url: "/main/profile",
        name: "Perfil",
        icon: "iconamoon:profile-circle",
        active: false,
      },
      {
        url: "/main/setting",
        name: "Configuración",
        icon: "icon-park-outline:setting-config",
        active: false,
      },
    ],
  },
];

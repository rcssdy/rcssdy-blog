var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/ryancassidy/Dropbox/My Mac (Ryans-MBP)/Documents/projects/rcssdy-blog/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
init_react();
var import_remix3 = __toModule(require_remix());
var import_react4 = __toModule(require("@chakra-ui/react"));

// app/components/Navigation.tsx
init_react();
var import_icons = __toModule(require("@chakra-ui/icons"));
var import_react = __toModule(require("@chakra-ui/react"));
var import_remix2 = __toModule(require_remix());
var NAVIGATION_ITEMS = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Resume",
    href: "/resume"
  }
];
function Navigation() {
  const { colorMode, toggleColorMode } = (0, import_react.useColorMode)();
  const { isOpen, onOpen, onClose } = (0, import_react.useDisclosure)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react.Box, {
    px: 4,
    borderBottom: "1px",
    borderColor: (0, import_react.useColorModeValue)("gray.100", "gray.700"),
    mb: 8
  }, /* @__PURE__ */ React.createElement(import_react.Container, {
    maxW: "container.lg"
  }, /* @__PURE__ */ React.createElement(import_react.Flex, {
    py: 4,
    alignItems: "center",
    justifyContent: "space-between"
  }, /* @__PURE__ */ React.createElement(import_react.Box, null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(import_react.Heading, {
    as: "h1",
    size: "lg"
  }, "rcssdy"))), /* @__PURE__ */ React.createElement(import_react.Flex, {
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(import_react.Stack, {
    direction: "row",
    spacing: 7
  }, /* @__PURE__ */ React.createElement(import_react.Flex, {
    marginY: "auto",
    gap: 4
  }, NAVIGATION_ITEMS.map((item) => /* @__PURE__ */ React.createElement(import_remix2.Link, {
    key: item.label,
    to: item.href
  }, item.label))), /* @__PURE__ */ React.createElement(import_react.Button, {
    onClick: toggleColorMode
  }, colorMode === "light" ? /* @__PURE__ */ React.createElement(import_icons.MoonIcon, null) : /* @__PURE__ */ React.createElement(import_icons.SunIcon, null))))))));
}

// app/components/Footer.tsx
init_react();
var import_react2 = __toModule(require("@chakra-ui/react"));
var import_react3 = __toModule(require("@chakra-ui/react"));
var import_fa = __toModule(require("react-icons/fa"));
function Footer() {
  return /* @__PURE__ */ React.createElement(import_react2.Container, {
    maxW: "container.lg",
    my: 8
  }, /* @__PURE__ */ React.createElement(import_react2.Box, {
    display: "flex",
    justifyContent: "space-between"
  }, /* @__PURE__ */ React.createElement(import_react2.Text, {
    color: "gray.400",
    my: "auto"
  }, "Copyright \xA9 ", new Date().getFullYear(), " Ryan Cassidy. All rights reserved."), /* @__PURE__ */ React.createElement(import_react2.Grid, {
    display: "flex",
    gap: 4
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/rcssdy"
  }, /* @__PURE__ */ React.createElement(import_react3.Icon, {
    as: import_fa.FaTwitter,
    w: 6,
    h: 6,
    color: "blue.400"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/rcssdy"
  }, /* @__PURE__ */ React.createElement(import_react3.Icon, {
    as: import_fa.FaGithub,
    w: 6,
    h: 6
  })))));
}

// route-module:/Users/ryancassidy/Dropbox/My Mac (Ryans-MBP)/Documents/projects/rcssdy-blog/app/root.tsx
var meta = () => {
  return { title: "Ryan Cassidy | Software Engineer" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react4.ChakraProvider, null, /* @__PURE__ */ React.createElement(Navigation, null), /* @__PURE__ */ React.createElement(import_react4.Container, {
    maxW: "container.lg"
  }, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null)), /* @__PURE__ */ React.createElement(Footer, null)), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}

// route-module:/Users/ryancassidy/Dropbox/My Mac (Ryans-MBP)/Documents/projects/rcssdy-blog/app/routes/resume.tsx
var resume_exports = {};
__export(resume_exports, {
  default: () => Resume
});
init_react();
var import_react5 = __toModule(require("@chakra-ui/react"));
var import_react6 = __toModule(require("@chakra-ui/react"));
var import_di = __toModule(require("react-icons/di"));
function Resume() {
  return /* @__PURE__ */ React.createElement(import_react5.Box, null, /* @__PURE__ */ React.createElement(import_react5.Grid, {
    gap: 4,
    autoFlow: "row dense"
  }, /* @__PURE__ */ React.createElement(import_react5.Heading, {
    as: "h1",
    size: "lg"
  }, "Resume"), /* @__PURE__ */ React.createElement(import_react5.Text, null, "Experienced software engineer with 7+ years of experience in commercial software development. In previous roles, I\u2019ve built software that has been served to millions of users. I believe my background is unique as I learned software development under supervision from an experienced database professional, having spent much of my career fixing old, outdated applications rather than greenfield projects. This has given me solid foundations in software engineering."), /* @__PURE__ */ React.createElement(import_react5.Heading, {
    as: "h2",
    size: "md"
  }, "Technologies"), /* @__PURE__ */ React.createElement(import_react5.Flex, null, /* @__PURE__ */ React.createElement(import_react6.Icon, {
    as: import_di.DiJsBadge,
    w: 12,
    h: 12
  }), /* @__PURE__ */ React.createElement(import_react6.Icon, {
    as: import_di.DiReact,
    w: 12,
    h: 12
  }), /* @__PURE__ */ React.createElement(import_react6.Icon, {
    as: import_di.DiAngularSimple,
    w: 12,
    h: 12
  }), /* @__PURE__ */ React.createElement(import_react6.Icon, {
    as: import_di.DiPhp,
    w: 12,
    h: 12
  }), /* @__PURE__ */ React.createElement(import_react6.Icon, {
    as: import_di.DiWordpress,
    w: 12,
    h: 12
  }), /* @__PURE__ */ React.createElement(import_react6.Icon, {
    as: import_di.DiMysql,
    w: 12,
    h: 12
  }), /* @__PURE__ */ React.createElement(import_react6.Icon, {
    as: import_di.DiRedis,
    w: 12,
    h: 12
  })), /* @__PURE__ */ React.createElement(import_react5.Heading, {
    as: "h2",
    size: "md"
  }, "Roles"), /* @__PURE__ */ React.createElement(import_react5.Grid, {
    borderWidth: "1px",
    borderRadius: "lg",
    p: 6,
    boxShadow: "base",
    gap: 2,
    autoFlow: "row dense"
  }, /* @__PURE__ */ React.createElement(import_react5.Heading, {
    as: "h3",
    size: "md"
  }, "Senior Software Engineer, Happy Group"), /* @__PURE__ */ React.createElement(import_react5.Text, {
    fontSize: "lg"
  }, "Jan 2021 - Present"), /* @__PURE__ */ React.createElement(import_react5.UnorderedList, null, /* @__PURE__ */ React.createElement(import_react5.ListItem, null, "Take responsibility for the direction of internal tools and new recruitment website through contributing to codebase and fixing urgent issues"), /* @__PURE__ */ React.createElement(import_react5.ListItem, null, "Educate team members on how to write clean code, solve problems and communicate effectively"), /* @__PURE__ */ React.createElement(import_react5.ListItem, null, "Fulfill DevOps requirements through continuous integration, monitoring and logging"), /* @__PURE__ */ React.createElement(import_react5.ListItem, null, "Interpret requirements from management, and relay to development team"), /* @__PURE__ */ React.createElement(import_react5.ListItem, null, "Perform regular code reviews (one to one) to ensure code conforms to internal standards, and inspire confidence in team members when problems arise")))));
}

// route-module:/Users/ryancassidy/Dropbox/My Mac (Ryans-MBP)/Documents/projects/rcssdy-blog/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
var import_react7 = __toModule(require("@chakra-ui/react"));
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react7.Box, {
    display: "flex",
    flexDirection: ["column-reverse", "column-reverse", "row"],
    borderWidth: "1px",
    borderRadius: "lg",
    p: 8,
    gap: 4,
    boxShadow: "base"
  }, /* @__PURE__ */ React.createElement(import_react7.Grid, {
    gap: 4,
    autoFlow: "row dense"
  }, /* @__PURE__ */ React.createElement(import_react7.Heading, {
    as: "h1",
    size: "xl"
  }, "Hi, I'm Ryan Cassidy \u{1F44B}\u{1F3FB}"), /* @__PURE__ */ React.createElement(import_react7.Text, {
    fontSize: "lg"
  }, "I'm a Senior Software Engineer at Happy Group, solving complex problems with JavaScript & PHP. I've travelled the world writing code for ~8 years now, visiting many different countries in the process."), /* @__PURE__ */ React.createElement(import_react7.Button, {
    size: "lg",
    width: "150px"
  }, "Learn More")), /* @__PURE__ */ React.createElement(import_react7.Box, null, /* @__PURE__ */ React.createElement(import_react7.Image, {
    src: "/assets/me.jpg",
    alt: "Ryan Cassidy",
    width: ["60%", "60%", "450px"],
    mx: ["auto", "auto", "0"],
    borderRadius: "100%"
  }))));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/resume": {
    id: "routes/resume",
    parentId: "root",
    path: "resume",
    index: void 0,
    caseSensitive: void 0,
    module: resume_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9yeWFuY2Fzc2lkeS9Ecm9wYm94L015IE1hYyAoUnlhbnMtTUJQKS9Eb2N1bWVudHMvcHJvamVjdHMvcmNzc2R5LWJsb2cvYXBwL3Jvb3QudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL05hdmlnYXRpb24udHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9yeWFuY2Fzc2lkeS9Ecm9wYm94L015IE1hYyAoUnlhbnMtTUJQKS9Eb2N1bWVudHMvcHJvamVjdHMvcmNzc2R5LWJsb2cvYXBwL3JvdXRlcy9yZXN1bWUudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvcnlhbmNhc3NpZHkvRHJvcGJveC9NeSBNYWMgKFJ5YW5zLU1CUCkvRG9jdW1lbnRzL3Byb2plY3RzL3Jjc3NkeS1ibG9nL2FwcC9yb3V0ZXMvaW5kZXgudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvcnlhbmNhc3NpZHkvRHJvcGJveC9NeSBNYWMgKFJ5YW5zLU1CUCkvRG9jdW1lbnRzL3Byb2plY3RzL3Jjc3NkeS1ibG9nL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9yeWFuY2Fzc2lkeS9Ecm9wYm94L015IE1hYyAoUnlhbnMtTUJQKS9Eb2N1bWVudHMvcHJvamVjdHMvcmNzc2R5LWJsb2cvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9yeWFuY2Fzc2lkeS9Ecm9wYm94L015IE1hYyAoUnlhbnMtTUJQKS9Eb2N1bWVudHMvcHJvamVjdHMvcmNzc2R5LWJsb2cvYXBwL3JvdXRlcy9yZXN1bWUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9yeWFuY2Fzc2lkeS9Ecm9wYm94L015IE1hYyAoUnlhbnMtTUJQKS9Eb2N1bWVudHMvcHJvamVjdHMvcmNzc2R5LWJsb2cvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL3Jlc3VtZVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3Jlc3VtZVwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInJlc3VtZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciwgQ29udGFpbmVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJSeWFuIENhc3NpZHkgfCBTb2Z0d2FyZSBFbmdpbmVlclwiIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8Q2hha3JhUHJvdmlkZXI+XG4gICAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgICAgICA8Q29udGFpbmVyIG1heFc9XCJjb250YWluZXIubGdcIj5cbiAgICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTW9vbkljb24sIFN1bkljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBUZXh0LFxuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgRmxleCxcbiAgSGVhZGluZyxcbiAgU3RhY2ssXG4gIHVzZUNvbG9yTW9kZSxcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIHVzZURpc2Nsb3N1cmUsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmludGVyZmFjZSBOYXZJdGVtIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgaHJlZj86IHN0cmluZztcbn1cblxuY29uc3QgTkFWSUdBVElPTl9JVEVNUzogQXJyYXk8TmF2SXRlbT4gPSBbXG4gIHtcbiAgICBsYWJlbDogXCJIb21lXCIsXG4gICAgaHJlZjogXCIvXCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJSZXN1bWVcIixcbiAgICBocmVmOiBcIi9yZXN1bWVcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oKSB7XG4gIGNvbnN0IHsgY29sb3JNb2RlLCB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuICBjb25zdCB7IGlzT3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3hcbiAgICAgICAgcHg9ezR9XG4gICAgICAgIGJvcmRlckJvdHRvbT17XCIxcHhcIn1cbiAgICAgICAgYm9yZGVyQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCJncmF5LjcwMFwiKX1cbiAgICAgICAgbWI9ezh9XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXIgbWF4Vz1cImNvbnRhaW5lci5sZ1wiPlxuICAgICAgICAgIDxGbGV4IHB5PXs0fSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifSBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1iZXR3ZWVuXCJ9PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgICAgICAgcmNzc2R5XG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgPEZsZXggYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+XG4gICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e1wicm93XCJ9IHNwYWNpbmc9ezd9PlxuICAgICAgICAgICAgICAgIDxGbGV4IG1hcmdpblk9XCJhdXRvXCIgZ2FwPXs0fT5cbiAgICAgICAgICAgICAgICAgIHtOQVZJR0FUSU9OX0lURU1TLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2l0ZW0ubGFiZWx9IHRvPXtpdGVtLmhyZWZ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVDb2xvck1vZGV9PlxuICAgICAgICAgICAgICAgICAge2NvbG9yTW9kZSA9PT0gXCJsaWdodFwiID8gPE1vb25JY29uIC8+IDogPFN1bkljb24gLz59XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBHcmlkLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgRmFUd2l0dGVyLCBGYUdpdGh1YiB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBtYXhXPVwiY29udGFpbmVyLmxnXCIgbXk9ezh9PlxuICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PXtcInNwYWNlLWJldHdlZW5cIn0+XG4gICAgICAgIDxUZXh0IGNvbG9yPXtcImdyYXkuNDAwXCJ9IG15PVwiYXV0b1wiPlxuICAgICAgICAgIENvcHlyaWdodCBcdTAwQTkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gUnlhbiBDYXNzaWR5LiBBbGwgcmlnaHRzXG4gICAgICAgICAgcmVzZXJ2ZWQuXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPEdyaWQgZGlzcGxheT1cImZsZXhcIiBnYXA9ezR9PlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3Jjc3NkeVwiPlxuICAgICAgICAgICAgPEljb24gYXM9e0ZhVHdpdHRlcn0gdz17Nn0gaD17Nn0gY29sb3I9e1wiYmx1ZS40MDBcIn0gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yY3NzZHlcIj5cbiAgICAgICAgICAgIDxJY29uIGFzPXtGYUdpdGh1Yn0gdz17Nn0gaD17Nn0gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQm94PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIiwgImltcG9ydCB7XG4gIEJveCxcbiAgVGV4dCxcbiAgSGVhZGluZyxcbiAgR3JpZCxcbiAgVW5vcmRlcmVkTGlzdCxcbiAgTGlzdEl0ZW0sXG4gIFNpbXBsZUdyaWQsXG4gIEZsZXgsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7XG4gIERpQW5ndWxhclNpbXBsZSxcbiAgRGlKc0JhZGdlLFxuICBEaU15c3FsLFxuICBEaVBocCxcbiAgRGlSZWFjdCxcbiAgRGlSZWRpcyxcbiAgRGlXb3JkcHJlc3MsXG59IGZyb20gXCJyZWFjdC1pY29ucy9kaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXN1bWUoKSB7XG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIDxHcmlkIGdhcD17NH0gYXV0b0Zsb3c9XCJyb3cgZGVuc2VcIj5cbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJsZ1wiPlxuICAgICAgICAgIFJlc3VtZVxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIEV4cGVyaWVuY2VkIHNvZnR3YXJlIGVuZ2luZWVyIHdpdGggNysgeWVhcnMgb2YgZXhwZXJpZW5jZSBpblxuICAgICAgICAgIGNvbW1lcmNpYWwgc29mdHdhcmUgZGV2ZWxvcG1lbnQuIEluIHByZXZpb3VzIHJvbGVzLCBJXHUyMDE5dmUgYnVpbHRcbiAgICAgICAgICBzb2Z0d2FyZSB0aGF0IGhhcyBiZWVuIHNlcnZlZCB0byBtaWxsaW9ucyBvZiB1c2Vycy4gSSBiZWxpZXZlIG15XG4gICAgICAgICAgYmFja2dyb3VuZCBpcyB1bmlxdWUgYXMgSSBsZWFybmVkIHNvZnR3YXJlIGRldmVsb3BtZW50IHVuZGVyXG4gICAgICAgICAgc3VwZXJ2aXNpb24gZnJvbSBhbiBleHBlcmllbmNlZCBkYXRhYmFzZSBwcm9mZXNzaW9uYWwsIGhhdmluZyBzcGVudFxuICAgICAgICAgIG11Y2ggb2YgbXkgY2FyZWVyIGZpeGluZyBvbGQsIG91dGRhdGVkIGFwcGxpY2F0aW9ucyByYXRoZXIgdGhhblxuICAgICAgICAgIGdyZWVuZmllbGQgcHJvamVjdHMuIFRoaXMgaGFzIGdpdmVuIG1lIHNvbGlkIGZvdW5kYXRpb25zIGluIHNvZnR3YXJlXG4gICAgICAgICAgZW5naW5lZXJpbmcuXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHNpemU9XCJtZFwiPlxuICAgICAgICAgIFRlY2hub2xvZ2llc1xuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgIDxGbGV4PlxuICAgICAgICAgIDxJY29uIGFzPXtEaUpzQmFkZ2V9IHc9ezEyfSBoPXsxMn0gLz5cbiAgICAgICAgICA8SWNvbiBhcz17RGlSZWFjdH0gdz17MTJ9IGg9ezEyfSAvPlxuICAgICAgICAgIDxJY29uIGFzPXtEaUFuZ3VsYXJTaW1wbGV9IHc9ezEyfSBoPXsxMn0gLz5cbiAgICAgICAgICA8SWNvbiBhcz17RGlQaHB9IHc9ezEyfSBoPXsxMn0gLz5cbiAgICAgICAgICA8SWNvbiBhcz17RGlXb3JkcHJlc3N9IHc9ezEyfSBoPXsxMn0gLz5cbiAgICAgICAgICA8SWNvbiBhcz17RGlNeXNxbH0gdz17MTJ9IGg9ezEyfSAvPlxuICAgICAgICAgIDxJY29uIGFzPXtEaVJlZGlzfSB3PXsxMn0gaD17MTJ9IC8+XG4gICAgICAgIDwvRmxleD5cbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHNpemU9XCJtZFwiPlxuICAgICAgICAgIFJvbGVzXG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBib3JkZXJXaWR0aD1cIjFweFwiXG4gICAgICAgICAgYm9yZGVyUmFkaXVzPVwibGdcIlxuICAgICAgICAgIHA9ezZ9XG4gICAgICAgICAgYm94U2hhZG93PVwiYmFzZVwiXG4gICAgICAgICAgZ2FwPXsyfVxuICAgICAgICAgIGF1dG9GbG93PVwicm93IGRlbnNlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBzaXplPVwibWRcIj5cbiAgICAgICAgICAgIFNlbmlvciBTb2Z0d2FyZSBFbmdpbmVlciwgSGFwcHkgR3JvdXBcbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiPkphbiAyMDIxIC0gUHJlc2VudDwvVGV4dD5cbiAgICAgICAgICA8VW5vcmRlcmVkTGlzdD5cbiAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgVGFrZSByZXNwb25zaWJpbGl0eSBmb3IgdGhlIGRpcmVjdGlvbiBvZiBpbnRlcm5hbCB0b29scyBhbmQgbmV3XG4gICAgICAgICAgICAgIHJlY3J1aXRtZW50IHdlYnNpdGUgdGhyb3VnaCBjb250cmlidXRpbmcgdG8gY29kZWJhc2UgYW5kIGZpeGluZ1xuICAgICAgICAgICAgICB1cmdlbnQgaXNzdWVzXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICBFZHVjYXRlIHRlYW0gbWVtYmVycyBvbiBob3cgdG8gd3JpdGUgY2xlYW4gY29kZSwgc29sdmUgcHJvYmxlbXNcbiAgICAgICAgICAgICAgYW5kIGNvbW11bmljYXRlIGVmZmVjdGl2ZWx5XG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICBGdWxmaWxsIERldk9wcyByZXF1aXJlbWVudHMgdGhyb3VnaCBjb250aW51b3VzIGludGVncmF0aW9uLFxuICAgICAgICAgICAgICBtb25pdG9yaW5nIGFuZCBsb2dnaW5nXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICBJbnRlcnByZXQgcmVxdWlyZW1lbnRzIGZyb20gbWFuYWdlbWVudCwgYW5kIHJlbGF5IHRvIGRldmVsb3BtZW50XG4gICAgICAgICAgICAgIHRlYW1cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgIFBlcmZvcm0gcmVndWxhciBjb2RlIHJldmlld3MgKG9uZSB0byBvbmUpIHRvIGVuc3VyZSBjb2RlIGNvbmZvcm1zXG4gICAgICAgICAgICAgIHRvIGludGVybmFsIHN0YW5kYXJkcywgYW5kIGluc3BpcmUgY29uZmlkZW5jZSBpbiB0ZWFtIG1lbWJlcnMgd2hlblxuICAgICAgICAgICAgICBwcm9ibGVtcyBhcmlzZVxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICA8L1Vub3JkZXJlZExpc3Q+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBCb3gsIFRleHQsIEhlYWRpbmcsIEdyaWQsIEJ1dHRvbiwgSW1hZ2UgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveFxuICAgICAgICBkaXNwbGF5PXtcImZsZXhcIn1cbiAgICAgICAgZmxleERpcmVjdGlvbj17W1wiY29sdW1uLXJldmVyc2VcIiwgXCJjb2x1bW4tcmV2ZXJzZVwiLCBcInJvd1wiXX1cbiAgICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxuICAgICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXG4gICAgICAgIHA9ezh9XG4gICAgICAgIGdhcD17NH1cbiAgICAgICAgYm94U2hhZG93PVwiYmFzZVwiXG4gICAgICA+XG4gICAgICAgIDxHcmlkIGdhcD17NH0gYXV0b0Zsb3c9XCJyb3cgZGVuc2VcIj5cbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cInhsXCI+XG4gICAgICAgICAgICBIaSwgSSdtIFJ5YW4gQ2Fzc2lkeSBcdUQ4M0RcdURDNEJcdUQ4M0NcdURGRkJcbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgSSdtIGEgU2VuaW9yIFNvZnR3YXJlIEVuZ2luZWVyIGF0IEhhcHB5IEdyb3VwLCBzb2x2aW5nIGNvbXBsZXhcbiAgICAgICAgICAgIHByb2JsZW1zIHdpdGggSmF2YVNjcmlwdCAmIFBIUC4gSSd2ZSB0cmF2ZWxsZWQgdGhlIHdvcmxkIHdyaXRpbmdcbiAgICAgICAgICAgIGNvZGUgZm9yIH44IHllYXJzIG5vdywgdmlzaXRpbmcgbWFueSBkaWZmZXJlbnQgY291bnRyaWVzIGluIHRoZVxuICAgICAgICAgICAgcHJvY2Vzcy5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGdcIiB3aWR0aD17XCIxNTBweFwifT5cbiAgICAgICAgICAgIExlYXJuIE1vcmVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9tZS5qcGdcIlxuICAgICAgICAgICAgYWx0PVwiUnlhbiBDYXNzaWR5XCJcbiAgICAgICAgICAgIHdpZHRoPXtbXCI2MCVcIiwgXCI2MCVcIiwgXCI0NTBweFwiXX1cbiAgICAgICAgICAgIG14PXtbXCJhdXRvXCIsIFwiYXV0b1wiLCBcIjBcIl19XG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9e1wiMTAwJVwifVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFB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

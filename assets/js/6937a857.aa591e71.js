"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[997],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9543:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],i={title:"Volumes and Storage",weight:30},s=void 0,p={unversionedId:"storage/storage",id:"storage/storage",title:"Volumes and Storage",description:"When deploying an application that needs to retain data, you\u2019ll need to create persistent storage. Persistent storage allows you to store application data external from the pod running your application. This storage practice allows you to maintain application data, even if the application\u2019s pod fails.",source:"@site/docs/storage/storage.md",sourceDirName:"storage",slug:"/storage/",permalink:"/docs/docs/storage/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/storage/storage.md",tags:[],version:"current",lastUpdatedAt:1659130394,formattedLastUpdatedAt:"7/29/2022",frontMatter:{title:"Volumes and Storage",weight:30},sidebar:"mySidebar",previous:{title:"Backup and Restore",permalink:"/docs/docs/backup-restore/"},next:{title:"Networking",permalink:"/docs/docs/networking/"}},c={},m=[{value:"pvc.yaml",id:"pvcyaml",level:3},{value:"pod.yaml",id:"podyaml",level:3}],u={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When deploying an application that needs to retain data, you\u2019ll need to create persistent storage. Persistent storage allows you to store application data external from the pod running your application. This storage practice allows you to maintain application data, even if the application\u2019s pod fails."),(0,o.kt)("p",null,"A persistent volume (PV) is a piece of storage in the Kubernetes cluster, while a persistent volume claim (PVC) is a request for storage. For details on how PVs and PVCs work, refer to the official Kubernetes documentation on ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/"},"storage.")),(0,o.kt)("p",null,"This page describes how to set up persistent storage with a local storage provider, or with ",(0,o.kt)("a",{parentName:"p",href:"#setting-up-longhorn"},"Longhorn.")),(0,o.kt)("h1",{id:"whats-changed-in-k3s-storage"},"What's changed in K3s storage?"),(0,o.kt)("p",null,'K3s removes several optional volume plugins and all built-in (sometimes referred to as "in-tree") cloud providers. We do this in order to achieve a smaller binary size and to avoid dependence on third-party cloud or data center technologies and services, which may not be available in many K3s use cases. We are able to do this because their removal affects neither core Kubernetes functionality nor conformance.'),(0,o.kt)("p",null,"The following volume plugins have been removed from K3s:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"cephfs"),(0,o.kt)("li",{parentName:"ul"},"fc"),(0,o.kt)("li",{parentName:"ul"},"flocker"),(0,o.kt)("li",{parentName:"ul"},"git_repo"),(0,o.kt)("li",{parentName:"ul"},"glusterfs"),(0,o.kt)("li",{parentName:"ul"},"portworx"),(0,o.kt)("li",{parentName:"ul"},"quobyte"),(0,o.kt)("li",{parentName:"ul"},"rbd"),(0,o.kt)("li",{parentName:"ul"},"storageos")),(0,o.kt)("p",null,"Both components have out-of-tree alternatives that can be used with K3s: The Kubernetes ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/container-storage-interface/spec/blob/master/spec.md"},"Container Storage Interface (CSI)")," and ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/running-cloud-controller/"},"Cloud Provider Interface (CPI)"),"."),(0,o.kt)("p",null,"Kubernetes maintainers are actively migrating in-tree volume plugins to CSI drivers. For more information on this migration, please refer ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2021/12/10/storage-in-tree-to-csi-migration-status-update/"},"here"),"."),(0,o.kt)("h1",{id:"setting-up-the-local-storage-provider"},"Setting up the Local Storage Provider"),(0,o.kt)("p",null,"K3s comes with Rancher's Local Path Provisioner and this enables the ability to create persistent volume claims out of the box using local storage on the respective node. Below we cover a simple example. For more information please reference the official documentation ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/local-path-provisioner/blob/master/README.md#usage"},"here"),"."),(0,o.kt)("p",null,"Create a hostPath backed persistent volume claim and a pod to utilize it:"),(0,o.kt)("h3",{id:"pvcyaml"},"pvc.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: local-path-pvc\n  namespace: default\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: local-path\n  resources:\n    requests:\n      storage: 2Gi\n")),(0,o.kt)("h3",{id:"podyaml"},"pod.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: volume-test\n  namespace: default\nspec:\n  containers:\n  - name: volume-test\n    image: nginx:stable-alpine\n    imagePullPolicy: IfNotPresent\n    volumeMounts:\n    - name: volv\n      mountPath: /data\n    ports:\n    - containerPort: 80\n  volumes:\n  - name: volv\n    persistentVolumeClaim:\n      claimName: local-path-pvc\n")),(0,o.kt)("p",null,"Apply the yaml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f pvc.yaml\nkubectl create -f pod.yaml\n")),(0,o.kt)("p",null,"Confirm the PV and PVC are created:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pv\nkubectl get pvc\n")),(0,o.kt)("p",null,"The status should be Bound for each."),(0,o.kt)("h1",{id:"setting-up-longhorn"},"Setting up Longhorn"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"(pending change - longhorn may support arm64 and armhf in the future.)")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("blockquote",{parentName:"div"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," At this time Longhorn only supports amd64 and arm64 (experimental).")),(0,o.kt)("p",{parentName:"div"},"K3s supports ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/longhorn/longhorn"},"Longhorn"),". Longhorn is an open-source distributed block storage system for Kubernetes."),(0,o.kt)("p",{parentName:"div"},"Below we cover a simple example. For more information, refer to the official documentation ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/longhorn/longhorn/blob/master/README.md"},"here"),"."),(0,o.kt)("p",{parentName:"div"},"Apply the longhorn.yaml to install Longhorn:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/longhorn/longhorn/master/deploy/longhorn.yaml\n")),(0,o.kt)("p",{parentName:"div"},"Longhorn will be installed in the namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"longhorn-system"),"."),(0,o.kt)("p",{parentName:"div"},"Apply the yaml to create the PVC and pod:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f pvc.yaml\nkubectl create -f pod.yaml\n")),(0,o.kt)("h3",{parentName:"div",id:"pvcyaml-1"},"pvc.yaml"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: longhorn-volv-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: longhorn\n  resources:\n    requests:\n      storage: 2Gi\n")),(0,o.kt)("h3",{parentName:"div",id:"podyaml-1"},"pod.yaml"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: volume-test\n  namespace: default\nspec:\n  containers:\n  - name: volume-test\n    image: nginx:stable-alpine\n    imagePullPolicy: IfNotPresent\n    volumeMounts:\n    - name: volv\n      mountPath: /data\n    ports:\n    - containerPort: 80\n  volumes:\n  - name: volv\n    persistentVolumeClaim:\n      claimName: longhorn-volv-pvc\n")),(0,o.kt)("p",{parentName:"div"},"Confirm the PV and PVC are created:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pv\nkubectl get pvc\n")),(0,o.kt)("p",{parentName:"div"},"The status should be Bound for each."))))}d.isMDXComponent=!0}}]);
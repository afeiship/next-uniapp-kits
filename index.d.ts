interface Options {
  prefix: string;
  initialData: any;
}

interface NxStatic {
  UniappKits: {
    create: (options: Options) => any;
  };
}

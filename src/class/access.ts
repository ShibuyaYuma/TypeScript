const access = () => {
    class Example {
        // 公開プロパティ（どこからでもアクセス可能）
        public publicProp: string;
      
        // 読み取り専用プロパティ（初期化後に変更不可）
        public readonly readonlyProp: string;
      
        // プライベートプロパティ（クラス内でのみアクセス可能）
        private privateProp: number;
      
        // 保護されたプロパティ（クラス内およびサブクラス内でアクセス可能）
        protected protectedProp: string;
      
        constructor(
            publicProp: string,
            readonlyProp: string,
            privateProp: number,
            protectedProp: string
        ) {
            this.publicProp = publicProp;
            this.readonlyProp = readonlyProp;
            this.privateProp = privateProp;
            this.protectedProp = protectedProp;
        }
      
        // 公開メソッド
        public showPublic(): void {
            console.log(`Public: ${this.publicProp}`);
        }
      
        // プライベートメソッド（クラス内でのみ使用）
        private showPrivate(): void {
            console.log(`Private: ${this.privateProp}`);
        }
      
        // 保護されたメソッド（サブクラスからもアクセス可能）
        protected showProtected(): void {
             console.log(`Protected: ${this.protectedProp}`);
        }
      
        // 読み取り専用のプロパティを表示するメソッド
        public showReadonly(): void {
             console.log(`Readonly: ${this.readonlyProp}`);
        }
    }
      
    class SubExample extends Example {
        constructor() {
             super("PublicValue", "ReadonlyValue", 42, "ProtectedValue");
        }
      
    // 保護されたプロパティやメソッドにアクセス可能
        public accessProtected(): void {
            console.log("Accessing protected property and method:");
            console.log(`Protected Prop: ${this.protectedProp}`); // OK
            this.showProtected(); // OK
        }
    }
    
    const example = new Example("PublicExample", "ReadonlyExample", 10, "ProtectedExample");
    
    // 公開プロパティやメソッドにアクセス可能
    example.showPublic(); // Public: PublicExample
    example.showReadonly(); // Readonly: ReadonlyExample
    console.log(example.publicProp); // PublicExample
    
    // プライベートや保護されたプロパティ/メソッドには直接アクセスできない
    // console.log(example.privateProp); // エラー
    // console.log(example.protectedProp); // エラー
    // example.showPrivate(); // エラー
    // example.showProtected(); // エラー

    const subExample = new SubExample();
    // サブクラスから保護されたメソッドやプロパティにアクセス可能
    subExample.accessProtected(); // Accessing protected property and method: Protected Prop: ProtectedValue
      
}

export default access
---
slug: 2021-04-05-db-migration-on-infrastructure-layer-project
title: 【.NET、C#】複数スタートアップのプロジェクト構成のソリューションでDBマイグレーションファイルをインフラ層のプロジェクトに生成する
author: sugu-sano
author_title: web application developper
author_url: https://github.com/sugu-sano
author_image_url: https://avatars.githubusercontent.com/u/70303693?s=60&v=4
tags: [.NET, .NET Core, db migration, C#, EntityFramework Core]
---

<svg height="256" viewBox="0 0 64 64" width="256" xmlns="http://www.w3.org/2000/svg"><g id="Layer_34" data-name="Layer 34"><g id="database_server" data-name="database server"><rect fill="#57a4ff" height="12" rx="2" width="40" x="3" y="19"/><path d="m43 21v8a2.006 2.006 0 0 1 -2 2h-4a2.006 2.006 0 0 0 2-2v-8a2.006 2.006 0 0 0 -2-2h4a2.006 2.006 0 0 1 2 2z" fill="#2488ff"/><path d="m33 31h6v4h-6z" fill="#acabb1"/><path d="m33 15h6v4h-6z" fill="#acabb1"/><path d="m36 15h3v4h-3z" fill="#898890"/><path d="m36 31h3v4h-3z" fill="#898890"/><rect fill="#57a4ff" height="12" rx="2" width="40" x="3" y="35"/><path d="m43 37v8a2.006 2.006 0 0 1 -2 2h-4a2.006 2.006 0 0 0 2-2v-8a2.006 2.006 0 0 0 -2-2h4a2.006 2.006 0 0 1 2 2z" fill="#2488ff"/><path d="m15 39h4v4h-4z" fill="#00b6bd"/><path d="m15 23h4v4h-4z" fill="#00b6bd"/><rect fill="#57a4ff" height="12" rx="2" width="40" x="3" y="3"/><path d="m43 5v8a2.006 2.006 0 0 1 -2 2h-4a2.006 2.006 0 0 0 2-2v-8a2.006 2.006 0 0 0 -2-2h4a2.006 2.006 0 0 1 2 2z" fill="#2488ff"/><path d="m15 7h4v4h-4z" fill="#00b6bd"/><path d="m7 31h6v4h-6z" fill="#acabb1"/><path d="m7 15h6v4h-6z" fill="#acabb1"/><path d="m10 15h3v4h-3z" fill="#898890"/><path d="m10 31h3v4h-3z" fill="#898890"/><path d="m7 39h4v4h-4z" fill="#ff7956"/><path d="m7 23h4v4h-4z" fill="#ff7956"/><path d="m7 7h4v4h-4z" fill="#ff7956"/><path d="m61 46v10c0 2.76-8.06 5-18 5s-18-2.24-18-5v-10c0 2.76 8.06 5 18 5s18-2.24 18-5z" fill="#ffde55"/><path d="m61 36v10c0 2.76-8.06 5-18 5s-18-2.24-18-5v-10c0 2.76 8.06 5 18 5s18-2.24 18-5z" fill="#ffde55"/><path d="m61 26v10c0 2.76-8.06 5-18 5s-18-2.24-18-5v-10c0 2.76 8.06 5 18 5s18-2.24 18-5z" fill="#ffde55"/><g fill="#ffcd00"><ellipse cx="43" cy="26" rx="18" ry="5"/><path d="m61 46v10c0 2.76-8.06 5-18 5-.68 0-1.34-.01-2-.04 9-.27 16-2.39 16-4.96v-6.86c2.5-.86 4-1.95 4-3.14z"/><path d="m61 36v10c0 1.19-1.5 2.28-4 3.14a46.109 46.109 0 0 1 -14 1.86c-.68 0-1.34-.01-2-.04 9-.27 16-2.39 16-4.96v-6.86c2.5-.86 4-1.95 4-3.14z"/><path d="m61 26v10c0 1.19-1.5 2.28-4 3.14a46.109 46.109 0 0 1 -14 1.86c-.68 0-1.34-.01-2-.04 9-.27 16-2.39 16-4.96v-6.86c2.5-.86 4-1.95 4-3.14z"/></g><path d="m61 26c0 1.19-1.5 2.28-4 3.14a46.109 46.109 0 0 1 -14 1.86c-.68 0-1.34-.01-2-.04 9-.27 16-2.39 16-4.96s-7-4.69-16-4.96c.66-.03 1.32-.04 2-.04 9.94 0 18 2.24 18 5z" fill="#ebbf00"/><path d="m57 46v3.14a46.109 46.109 0 0 1 -14 1.86c-.68 0-1.34-.01-2-.04 9-.27 16-2.39 16-4.96z" fill="#ffde55"/><path d="m57 36v3.14a46.109 46.109 0 0 1 -14 1.86c-.68 0-1.34-.01-2-.04 9-.27 16-2.39 16-4.96z" fill="#ffde55"/><path d="m43.82 20.01a2.986 2.986 0 0 0 -2.82-2.01h-1v-2h1a3.009 3.009 0 0 0 3-3v-8a3.009 3.009 0 0 0 -3-3h-36a3.009 3.009 0 0 0 -3 3v8a3.009 3.009 0 0 0 3 3h1v2h-1a3.009 3.009 0 0 0 -3 3v8a3.009 3.009 0 0 0 3 3h1v2h-1a3.009 3.009 0 0 0 -3 3v8a3.009 3.009 0 0 0 3 3h19v8c0 3.94 9.56 6 19 6s19-2.06 19-6v-30c0-3.83-9.01-5.87-18.18-5.99zm-38.82-6.01a1 1 0 0 1 -1-1v-8a1 1 0 0 1 1-1h36a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1zm33 2v2h-4v-2zm-6 0v2h-18v-2zm-20 0v2h-4v-2zm12 30h-19a1 1 0 0 1 -1-1v-8a1 1 0 0 1 1-1h19zm-16-12v-2h4v2zm16 0h-10v-2h10zm0-8v4h-19a1 1 0 0 1 -1-1v-8a1 1 0 0 1 1-1h36a.7.7 0 0 1 .14.03c-8.8.25-17.14 2.29-17.14 5.97zm36 30c0 1.36-6 4-17 4s-17-2.64-17-4v-7.18c3.29 2.09 10.16 3.18 17 3.18s13.71-1.09 17-3.18zm0-10c0 1.36-6 4-17 4s-17-2.64-17-4v-7.18c3.29 2.09 10.16 3.18 17 3.18s13.71-1.09 17-3.18zm0-10c0 1.36-6 4-17 4s-17-2.64-17-4v-7.18c3.29 2.09 10.16 3.18 17 3.18s13.71-1.09 17-3.18zm-17-6c-11 0-17-2.64-17-4s6-4 17-4 17 2.64 17 4-6 4-17 4z"/><path d="m42 35h2v2h-2z"/><path d="m42 46h2v2h-2z"/><path d="m42 55h2v2h-2z"/><path d="m11 22h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"/><path d="m19 22h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"/><path d="m11 6h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"/><path d="m19 6h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"/><path d="m22 6h14v2h-14z"/><path d="m38 6h2v2h-2z"/><path d="m22 10h14v2h-14z"/><path d="m38 10h2v2h-2z"/><path d="m11 38h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"/><path d="m19 38h-4a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-2v-2h2z"/></g></g></svg>

## きっかけ

`dotnet ef migrations`コマンドでマイグレーションファイルを生成する際は、DB コンテキストを DI する必要があるため、実行形式のプロジェクトのディレクトリでコマンドを打つ必要があります。

しかし、下記の用にソリューション構成のように複数のスタートアッププロジェクト（`WebApi`、`WebSite`）がある場合、`WebApi`、`WebSite`のどちらかで行う必要がありますが、どちらか片方のプロジェクトにだけマイグレーションファイルがあるのは違和感があります。

```bash
$ tree .
├── ECommerceSample.sln
├── LICENSE
├── README.md
└── src
    ├── Application
    │   ├── Application.csproj
    ├── Domain
    │   ├── Domain.csproj
    ├── Infrastructure
    │   ├── Infrastructure.csproj
    ├── WebApi
    │   ├── Controllers
    │   │   └── WeatherForecastController.cs
    │   ├── Program.cs
    │   ├── Properties
    │   │   └── launchSettings.json
    │   ├── Startup.cs
    │   ├── WeatherForecast.cs
    │   ├── WebApi.csproj
    │   ├── appsettings.Development.json
    │   ├── appsettings.json
    └── WebSite
        ├── Pages
        │   ├── Index.cshtml
        │   ├── Index.cshtml.cs
        │   (略...)
        ├── Program.cs
        ├── Properties
        │   └── launchSettings.json
        ├── Startup.cs
        ├── WebSite.csproj
        ├── appsettings.Development.json
        ├── appsettings.json
        └── wwwroot
            ├── css
            (略...)
```

できれば共通で呼び出す`Infrastructure`プロジェクト直下にマイグレーションファイルを生成したいところです。

しかし作成していたソリューション構成では`Infrastructure`プロジェクトがクラスライブラリのプロジェクトでした。

そのため、`Infrastructure`プロジェクト直下で`dotnet ef migrations`コマンドをうってもエラーになってマイグレーションファイルを生成できません。

そこで`Infrastructure`プロジェクトをクラスライブラリからコンソールアプリに変えてしまって、DI コンテナを起動できる用に変更します。

<!--truncate-->

## `Infrastructure`プロジェクト以下にマイグレーションファイルを生成できるようにする

NUGET から.NET 汎用ホストと DI（依存性注入）のライブラリの参照を`Infrastructure`に追加します。

```bash
cd /path/to/Infrastructure
dotnet add package Microsoft.Extensions.Hosting
dotnet add package Microsoft.Extensions.DependencyInjection
```

さらにマイグレーションのためにエンティティフレームワークと DB（今回は SQLite）プロバイダも追加します。

```bash
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.EntityFrameworkCore.Sqlite
```

プロジェクトファイルに下記のように追加されるはずです。

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <!--略-->
  <ItemGroup>
    <PackageReference Include="Microsoft.EntityFrameworkCore" Version="5.0.4" />
    <PackageReference Include="Microsoft.EntityFrameworkCore.Design" Version="5.0.4">
      <PrivateAssets>all</PrivateAssets>
      <IncludeAssets>runtime; build; native; contentfiles; analyzers; buildtransitive</IncludeAssets>
    </PackageReference>
    <PackageReference Include="Microsoft.EntityFrameworkCore.Sqlite" Version="5.0.4" />
    <PackageReference Include="Microsoft.EntityFrameworkCore.Tools" Version="5.0.4">
      <PrivateAssets>all</PrivateAssets>
      <IncludeAssets>runtime; build; native; contentfiles; analyzers; buildtransitive</IncludeAssets>
    </PackageReference>
    <PackageReference Include="Microsoft.Extensions.DependencyInjection" Version="5.0.1" />
    <PackageReference Include="Microsoft.Extensions.Hosting" Version="5.0.0" />
  </ItemGroup>
  <!--略-->
</Project>
```

次に DB のモデルのクラスを作成します。

私はドメインモデルと DB モデルを明確に分けるのが好みなので`Infrastructure`プロジェクトに作成します。

```csharp
public record AdminAccount
{
    public int Id { get; init; }
    public DateTime CreateAt { get; init; }
    public DateTime? UpdatedAt { get; init; }
    public string AccountName { get; init; }
    public bool Enabled { get; init; }
    public AdminAccountRole[] AdminAccountRoles { get; init; }
}

public class AdminAccountConfiguration : IEntityTypeConfiguration<AdminAccount>
{
    public void Configure(EntityTypeBuilder<AdminAccount> builder)
    {
        builder.HasKey(adminAccount => adminAccount.Id);
        builder.Property(adminAccount => adminAccount.AccountName).IsRequired(true);
        builder.Property(adminAccount => adminAccount.Enabled).IsRequired(true);
        builder.Property(adminAccount => adminAccount.CreateAt).IsRequired(true);
        builder.Property(adminAccount => adminAccount.UpdatedAt).IsRequired(false);
    }
}

/*
 * 他のモデルは省略します
 */
```

DB コンテキストを用意します。

今回は通常の DB コンテキストとそれを継承したローカル開発用の SQLite 用の DB コンテキストの２つを用意します。

```csharp
public class ECommerceDbContext : DbContext
{
    public DbSet<AdminAccount> AdminAccounts { get; set; }
    public DbSet<AdminAccountRole> AdminAccountRoles { get; set; }
    public DbSet<AdminRole> AdminRoles { get; set; }
    public DbSet<AdminRolePermission> AdminRolePermissions { get; set; }
    public DbSet<AdminPermission> AdminPermissions { get; set; }
    public ECommerceDbContext(DbContextOptions<ECommerceDbContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        builder.ApplyConfiguration(new AdminAccountConfiguration());
        builder.ApplyConfiguration(new AdminAccountRoleConfiguration());
        // 略...
    }
}

public class SqliteECommerceDbContext : ECommerceDbContext
{
    public SqliteECommerceDbContext(DbContextOptions<ECommerceDbContext> options) : base(options) { }
    protected override void OnConfiguring(DbContextOptionsBuilder builder)
    {
        builder.UseSqlite("Data Source=ECommerceSample.sqlite");
    }
}
```

ここまで完了したら`Infrastructure`プロジェクトをクラスライブリからコンソールアプリ（実行ファイル）に変更します。

`<OutputType>Exe</OutputType>`を追加します。

```diff
  <Project Sdk="Microsoft.NET.Sdk">
    <!--略-->
    <PropertyGroup>
+     <OutputType>Exe</OutputType>
      <TargetFramework>net5.0</TargetFramework>
      <AssemblyName>ECommerceSample.Infrastructure</AssemblyName>
      <RootNamespace>ECommerceSample.Infrastructure</RootNamespace>
      <Nullable>disable</Nullable>
    </PropertyGroup>
   <!--略-->
  </Project>
```

DI コンテナに DB コンテキストの DI 設定を追加します。

`WebSite`や`WebApi`プロジェクトでも同じ用に設定すると考えると拡張メソッドで共通化しておくと便利かと思います。

```csharp:DefaultDependencyInjection.cs
public static class DefaultDependencyInjection
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services)
    {
        services.AddDbContext<ECommerceDbContext>();
        services.AddDbContext<SqliteECommerceDbContext>();
        return services;
    }
}
```

エントリーポイントを作成しホスティング構成をして上記の DI 設定を呼び出します。

```csharp
class Program
{
    static async Task Main(string[] args)
    {
        using IHost host = CreateHostBuilder(args).Build();
        await host.RunAsync();
    }

    static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureServices((_, services) =>
            {
                services.AddInfrastructureServices();
            });
}
```

これでマイグレーションファイルが生成できるようになりました。

ただその前に、SQLite の DB の実体`.sqlite`と SQL Client（DB Browser）で作成される一時ファイルはプロジェクトに追加されないようにし、git 管理下からも外しておくと良いと思います。

```xml:Infrastructure.csproj
<Project Sdk="Microsoft.NET.Sdk">
  <!--略-->
  <ItemGroup>
    <None Remove="*.sqlite" />
    <None Remove="*.sqlite-shm" />
    <None Remove="*.sqlite-wal" />
  </ItemGroup>
  <!--略-->
</Project>
```

```.gitignore:.gitignore
# SQLite
*.sqlite
*.sqlite-shm
*.sqlite-wal
```

マイグレーションファイルを生成します。

```bashマイグレーションする
dotnet ef migrations add InitialCreate --context SqliteECommerceDbContext --output-dir /Migrations/Sqlite -v
```

`--context`で SQLite 用の DB コンテキストを指定しています。

`--output-dir`でマイグレーションファイルが生成されるフォルダを指定できます。他の DB のものと混ざらないようにフォルダを分けておくといいと思います。

また、`-v`をつけるとターミナルへの出力が詳しくなり、生成失敗時に調査しやすくなります。

下記のようにマイグレーションファイルが生成されます。

```bash
$ tree .
.
├── ECommerceSample.sln
(略)
└── src
    ├── Application
    ├── Domain
    ├── Infrastructure
    │   ├── ECommerceDbContext.cs
    │   ├── Migrations
    │   (略)└── Sqlite
    │           ├── 20210325163438_InitialCreate.Designer.cs
    │           ├── 20210325163438_InitialCreate.cs
    │           └── SqliteECommerceDbContextModelSnapshot.cs
    (略)
    ├── WebApi
    └── WebSite
```

実際に DB マイグレーションしてテーブルを作成します。

今回は`.sqlite`ファイルの生成になります。

```bash
dotnet ef database update --context SqliteECommerceDbContext  -v
```

`Infrastructure`プロジェクト直下に`ECommerceSample.sqlite`が生成されました。

中身を覗くとテーブルが生成出来ていることが確認できました。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/195024/2f9c7f6d-5b1c-2ac1-dab6-db54f9cd87f8.png)

これで数スタートアッププロジェクト構成のソリューションで、DB マイグレーションファイルをインフラ層のプロジェクトに生成する目的が達成できました。

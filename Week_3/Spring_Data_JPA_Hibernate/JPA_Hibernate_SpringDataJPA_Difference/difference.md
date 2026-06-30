\# Difference between JPA, Hibernate and Spring Data JPA



\## JPA



JPA stands for Java Persistence API.



JPA is a specification used for persisting, reading, and managing data from Java objects. It only defines rules and annotations for ORM mapping. JPA does not provide its own implementation.



Examples of JPA annotations:



```java

@Entity

@Table

@Id

@Column

```



JPA needs an implementation provider to actually work. Hibernate is one of the most commonly used JPA implementations.



\## Hibernate



Hibernate is an ORM tool.



ORM means Object Relational Mapping. It maps Java classes to database tables and Java objects to table rows.



Hibernate implements JPA specifications and provides the actual logic to perform database operations. It can also provide extra features beyond JPA.



In Hibernate, developers usually handle more boilerplate code such as session, transaction, commit, rollback, and closing session.



Example:



```java

Session session = factory.openSession();

Transaction tx = session.beginTransaction();

session.save(employee);

tx.commit();

session.close();

```



\## Spring Data JPA



Spring Data JPA is not a JPA implementation.



It is an abstraction layer built on top of JPA providers like Hibernate. It reduces boilerplate code and makes database operations easier.



Instead of writing session and transaction code manually, we can create repository interfaces by extending JpaRepository.



Example:



```java

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}

```



Then we can directly use methods like:



```java

save()

findById()

findAll()

deleteById()

```



Spring Data JPA also manages transactions and supports query methods.



\## Simple comparison



| Topic                   | JPA                     | Hibernate               | Spring Data JPA                |

| ----------------------- | ----------------------- | ----------------------- | ------------------------------ |

| Type                    | Specification           | ORM implementation      | Abstraction layer              |

| Provides implementation | No                      | Yes                     | No                             |

| Uses                    | Defines ORM rules       | Performs ORM operations | Reduces repository boilerplate |

| Example                 | @Entity, @Id            | Session, Transaction    | JpaRepository                  |

| Depends on              | Implementation provider | Database and ORM config | JPA provider like Hibernate    |



\## Conclusion



JPA defines the standard rules, Hibernate implements those rules, and Spring Data JPA makes database operations simpler by reducing boilerplate code using repositories.




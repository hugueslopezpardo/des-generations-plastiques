/**
 * Represents a user in the system
 */
export interface User {
    id: string;
    first_name: string;
    last_name: string;
    name: string;
    pseudo: string;
    user_type_id: number;
    protocole_type: string;
    protocole_type_terrain_dirt: string;
    protocole_type_terrain_vegetation: string;
    email: string;
    email_verified_at?: string;
}

/**
 * All the genders available
 */
export interface Gender {
    id: string;
    name: string;
    slug: string;
}

/**
 * All the departments in the country
 */
export interface Department {
    id: string;
    name: string;
    code: string;
}

/**
 * All the regions in the country
 */
export interface Region {
    id: string;
    name: string;
    code: string;
    departments: Department[];
}

/**
 * All the levels of schools
 */
export interface SchoolLevel {
    id: string;
    name: string;
    slug: string;
}

/**
 * All the delivery types
 */
export interface DeliveryType {
    id: string;
    name: string;
    slug: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
